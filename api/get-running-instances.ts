import { useQuery } from '@tanstack/react-query';

import { InstanceListResponse } from '@/entities/deployment';
import { api } from '@/libs/axios';

const axios = async () => (await api.get<InstanceListResponse>(`/sqlite-extractor/instances`)).data;

export const useGetRunningInstances = () => {
  const queryKey = ['running-instances'];
  const data = useQuery<InstanceListResponse>({
    queryKey,
    queryFn: () => axios(),
  });

  return { queryKey, ...data };
};
