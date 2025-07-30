export default function FearGreedWidget({ data }) {
  const fg = data?.data[0];
  return (
    <div className="bg-card p-4 rounded-xl text-center">
      <h2 className="text-xl font-bold mb-2">Fear & Greed Index</h2>
      <p className="text-3xl font-extrabold text-yellow-400">{fg.value}</p>
      <p className="uppercase text-sm text-gray-400">{fg.value_classification}</p>
    </div>
  );
}
