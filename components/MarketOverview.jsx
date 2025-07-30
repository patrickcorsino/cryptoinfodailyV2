export default function MarketOverview({ stats }) {
  const data = stats.data;
  return (
    <div className="bg-card p-4 rounded-xl text-center">
      <h2 className="text-xl font-bold mb-2">Market Overview</h2>
      <p className="text-sm text-gray-400">Total Market Cap:</p>
      <p className="text-xl font-bold mb-1">${data.total_market_cap.usd.toLocaleString()}</p>
      <p className="text-sm text-gray-400">BTC Dominance:</p>
      <p className="text-xl font-bold">{data.market_cap_percentage.btc.toFixed(2)}%</p>
    </div>
  );
}
