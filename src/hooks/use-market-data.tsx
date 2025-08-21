import { useQuery } from '@tanstack/react-query';
import type { MarketDataPoint } from '../types/market';

async function fetchLocal<T>(path: string): Promise<T> {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

export function useMarketData() {
  return useQuery<MarketDataPoint[]>({
    queryKey: ['data/market.json'],
    queryFn: () => fetchLocal<MarketDataPoint[]>('data/market.json'),
    refetchInterval: 30000,
  });
}
