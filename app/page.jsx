"use client";

import { useEffect, useState } from 'react';
import { getMarketData, getTrending, getFearGreed, getGlobalStats } from '../lib/api';
import CoinTable from '../components/CoinTable';
import TrendingCoins from '../components/TrendingCoins';
import FearGreedWidget from '../components/FearGreedWidget';
import MarketOverview from '../components/MarketOverview';
import DegenToggle from '../components/DegenToggle';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [trending, setTrending] = useState([]);
  const [fg, setFg] = useState(null);
  const [stats, setStats] = useState(null);

  const fetchData = async () => {
    const [coinsData, trendingData, fgData, statsData] = await Promise.all([
      getMarketData(),
      getTrending(),
      getFearGreed(),
      getGlobalStats()
    ]);
    setCoins(coinsData);
    setTrending(trendingData);
    setFg(fgData);
    setStats(statsData);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white to-degen bg-clip-text text-transparent">Crypto Dashboard</h1>
        <DegenToggle />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <TrendingCoins coins={trending} />
        <FearGreedWidget data={fg} />
        <MarketOverview stats={stats} />
      </div>

      <CoinTable coins={coins} />
    </main>
  );
}
