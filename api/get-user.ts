import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';

import { User } from '@/entities/user';
import { api } from '@/libs/axios';

const axios = async (walletAddress?: string) => {
  if (!walletAddress)
    return {
      walletAddress: '',
      agent: [],
      memory: [],
    };
  return (await api.get<User>(`/user?walletAddress=${walletAddress}`)).data;
};

export const useGetUser = () => {
  const { address } = useAccount();

  const queryKey = ['user', address];
  const data = useQuery<User>({
    queryKey,
    queryFn: () => axios(address as string),

    staleTime: 60 * 1000,
    enabled: !!address,
  });

  return { queryKey, ...data };
};
