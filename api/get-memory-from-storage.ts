import { useQuery } from '@tanstack/react-query';

import { storageApi } from '@/libs/axios';

const axios = async (path: string) => {
  if (!path) return null;
  return (await storageApi.get<any>(path)).data;
};

export const useGetMemoryFromStorage = (path: string) => {
  const queryKey = ['memory-from-storage', path];
  const data = useQuery<any>({
    queryKey,
    queryFn: () => axios(path),
  });

  return { queryKey, ...data };
};
