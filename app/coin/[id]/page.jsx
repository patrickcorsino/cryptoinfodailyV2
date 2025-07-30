import { getCoin } from '../../../lib/api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default async function CoinDetail({ params }) {
  const coin = await getCoin(params.id);

  const chartData = {
    labels: coin.market_data.sparkline_7d.price.map((_, i) => i),
    datasets: [
      {
        label: `${coin.name} Price (7d)`,
        data: coin.market_data.sparkline_7d.price,
        borderColor: '#00ff99',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <img src={coin.image.large} className="w-12 h-12" />
        <h1 className="text-3xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
      </div>
     <p className="text-gray-400 text-sm">
  {coin.description?.en?.length > 0
    ? coin.description.en.split('. ')[0]
    : 'No description available.'}
</p>


      <Line data={chartData} options={{ responsive: true }} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Current Price</p>
          <p className="text-xl font-bold">${coin.market_data.current_price.usd.toLocaleString()}</p>
        </div>
        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Market Cap</p>
          <p className="text-xl font-bold">${coin.market_data.market_cap.usd.toLocaleString()}</p>
        </div>
        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Supply</p>
          <p className="text-xl font-bold">{coin.market_data.circulating_supply.toLocaleString()}</p>
        </div>
        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400 text-sm">All-Time High</p>
          <p className="text-xl font-bold">${coin.market_data.ath.usd.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
