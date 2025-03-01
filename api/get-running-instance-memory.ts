import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MemoriesCsvResponse } from '@/entities/deployment';
import { api } from '@/libs/axios';

export const useGetRunningInstanceMemory = () => {
  const mutationFn = async (instanceName: string) => {
    const res = (
      await api.get<MemoriesCsvResponse>(`/sqlite-extractor/memories/${instanceName}?download=true`)
    ).data;

    return res;
  };

  const data = useMutation<MemoriesCsvResponse, AxiosError, string>({
    mutationKey: ['running-instance-memory'],
    mutationFn,
  });

  return { ...data };
};
