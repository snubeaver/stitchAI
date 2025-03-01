import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/libs/axios';

type Request = {
  telegram: string;
  agentName: string;
  description: string;
  socialLink: string;
  memoryId: string;
  walletAddress: string;
};

export const usePostCreateElizaAgent = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (req: Request): Promise<void> => {
    await api.post(`/deployment/create-eliza`, req);

    await queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  const data = useMutation<void, AxiosError<Request>, Request>({
    mutationKey: ['create-eliza-agent'],
    mutationFn,
  });

  return { ...data };
};
