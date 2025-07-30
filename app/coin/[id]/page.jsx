import { notFound } from 'next/navigation';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export async function generateMetadata({ params }) {
  return {
    title: `${params.id} | Coin Detail`,
  };
}

async function getCoinData(id) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`);
  if (!res.ok) return null;
  return res.json();
}

export default async function CoinDetail({ params }) {
  const coin = await getCoinData(params.id);
  if (!coin) return notFound();

  const chartData = {
    labels: coin.market_data.sparkline_7d?.price.map((_, i) => i),
    datasets: [
      {
        label: `${coin.name} 7d`,
        data: coin.market_data.sparkline_7d?.price,
        borderColor: '#00ff99',
        backgroundColor: 'rgba(0,255,153,0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: { display: false },
      y: { ticks: { color: '#999' }, grid: { color: '#222' } },
    },
    plugins: {
      legend: { labels: { color: '#aaa' } }
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <img src={coin.image.large} alt={coin.name} className="w-12 h-12" />
        <div>
          <h1 className="text-3xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
          <p className="text-gray-400">${coin.market_data.current_price.usd.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-xl shadow-soft">
        <Line data={chartData} options={options} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</div>
        <div><strong>24h Volume:</strong> ${coin.market_data.total_volume.usd.toLocaleString()}</div>
        <div><strong>Circulating Supply:</strong> {coin.market_data.circulating_supply.toLocaleString()}</div>
        <div><strong>Total Supply:</strong> {coin.market_data.total_supply?.toLocaleString() || 'N/A'}</div>
        <div><strong>All Time High:</strong> ${coin.market_data.ath.usd.toLocaleString()}</div>
        <div><strong>All Time Low:</strong> ${coin.market_data.atl.usd.toLocaleString()}</div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">About</h2>
        <p className="text-gray-400 text-sm">
          {coin.description?.en?.length > 0
            ? coin.description.en.split('. ')[0]
            : 'No description available.'}
        </p>
      </div>
    </main>
  );
}
