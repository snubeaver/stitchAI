import { useQuery } from '@tanstack/react-query';

import { MarketMemory } from '@/entities/market-memory';
import { api } from '@/libs/axios';

const axios = async () => (await api.get<MarketMemory[]>(`/market/memories?type=AGENT`)).data;

export const useGetMarketAgentMemory = () => {
  const queryKey = ['market', 'agent-memory'];
  const data = useQuery<MarketMemory[]>({
    queryKey,
    queryFn: () => axios(),
  });

  return { queryKey, ...data };
};
