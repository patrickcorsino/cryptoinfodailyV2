import { getMarketData, getTrending, getFearGreed } from '../lib/api';
import CoinTable from '../components/CoinTable';
import TrendingCoins from '../components/TrendingCoins';
import FearGreedWidget from '../components/FearGreedWidget';
import MarketOverview from '../components/MarketOverview';
import DegenToggle from '../components/DegenToggle';

export default async function Home() {
  const coins = await getMarketData();
  const trending = await getTrending();
  const fg = await getFearGreed();

  return (
    <main className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Crypto Dashboard</h1>
        <DegenToggle />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <TrendingCoins coins={trending} />
        <FearGreedWidget data={fg} />
        <MarketOverview />
      </div>

      <CoinTable coins={coins} />
    </main>
  );
}
