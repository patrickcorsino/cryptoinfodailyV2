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
    try {
      const [coinsData, trendingData, fgData, statsData] = await Promise.all([
        getMarketData(),
        getTrending(),
        getFearGreed(),
        getGlobalStats()
      ]);
      setCoins(Array.isArray(coinsData) ? coinsData : []);
      setTrending(Array.isArray(trendingData) ? trendingData : []);
      setFg(fgData || null);
      setStats(statsData || null);
    } catch (error) {
      console.error('Data fetch error:', error);
      setCoins([]);
      setTrending([]);
      setFg(null);
      setStats(null);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white to-degen bg-clip-text text-transparent">Crypto Dashboard</h1>
        <DegenToggle />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {Array.isArray(trending) && trending.length > 0 && <TrendingCoins coins={trending} />}
        {fg && <FearGreedWidget data={fg} />}
        {stats && <MarketOverview stats={stats} />}
      </div>

      {Array.isArray(coins) && coins.length > 0 && <CoinTable coins={coins} />}
    </main>
  );
}
