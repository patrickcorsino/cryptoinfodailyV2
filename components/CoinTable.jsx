import CoinRow from './CoinRow';

export default function CoinTable({ coins }) {
  return (
    <div className="bg-card p-4 rounded-xl">
      <div className="grid grid-cols-7 gap-2 font-bold text-sm border-b border-gray-700 pb-2 mb-2">
        <p>Name</p>
        <p>Price</p>
        <p>1h%</p>
        <p>24h%</p>
        <p>Market Cap</p>
        <p>Volume</p>
        <p className="text-right">7d</p>
      </div>
      {coins.map(coin => <CoinRow key={coin.id} coin={coin} />)}
    </div>
  );
}
