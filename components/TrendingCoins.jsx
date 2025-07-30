export default function TrendingCoins({ coins }) {
  return (
    <div className="bg-card p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-2">Trending Coins</h2>
      <ul className="space-y-1">
        {coins.coins.map((coin, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{coin.item.name}</span>
            <span className="text-gray-400">{coin.item.symbol}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
