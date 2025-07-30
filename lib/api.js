const BASE = 'https://api.coingecko.com/api/v3';

export async function getMarketData() {
  const res = await fetch(`${BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`, { next: { revalidate: 30 }});
  return res.json();
}

export async function getCoin(id) {
  const res = await fetch(`${BASE}/coins/${id}?localization=false&sparkline=true`);
  return res.json();
}

export async function getTrending() {
  const res = await fetch(`${BASE}/search/trending`);
  return res.json();
}

export async function getFearGreed() {
  const res = await fetch('https://api.alternative.me/fng/?limit=1');
  return res.json();
}

export async function getGlobalStats() {
  const res = await fetch(`${BASE}/global`);
  return res.json();
}
