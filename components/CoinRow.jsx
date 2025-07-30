import Link from 'next/link';

export default function CoinRow({ coin }) {
  return (
    <Link href={`/coin/${coin.id}`}>
      <div className="grid grid-cols-7 gap-2 items-center py-2 hover:bg-card rounded-lg cursor-pointer">
        <div className="flex items-center space-x-2">
          <img src={coin.image} alt="logo" className="w-6 h-6" />
          <span className="font-bold">{coin.name}</span>
        </div>
        <p>${coin.current_price.toLocaleString()}</p>
        <p className={coin.price_change_percentage_1h_in_currency > 0 ? 'text-green-400' : 'text-red-400'}>
          {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
        </p>
        <p className={coin.price_change_percentage_24h_in_currency > 0 ? 'text-green-400' : 'text-red-400'}>
          {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
        </p>
        <p>${coin.market_cap.toLocaleString()}</p>
        <p>${coin.total_volume.toLocaleString()}</p>
        <p className="text-right text-xs text-gray-500">7d chart</p>
      </div>
    </Link>
  );
}
