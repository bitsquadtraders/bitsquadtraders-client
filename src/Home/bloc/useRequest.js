import { useCallback } from 'react';
import { SingleCoinRepository } from './CoinRepository';

export default function useRequest() {
  const fetcher = useCallback(async (id) => {
    const response = await SingleCoinRepository(id);
    console.log(response);
    return response;
  }, []);
  return [fetcher];
}
