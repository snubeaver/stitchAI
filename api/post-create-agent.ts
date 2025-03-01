import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/libs/axios';

type Request = {
  data: string;

  memoryId: string;
  walletAddress: string;
  agentName: string;
  description?: string;
  socialLink?: string;
};

export const usePostCreateAgent = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (req: Request): Promise<void> => {
    await api.post(`/crewai/add`, req);

    await queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  const data = useMutation<void, AxiosError<Request>, Request>({
    mutationKey: ['create-agent'],
    mutationFn,
  });

  return { ...data };
};
