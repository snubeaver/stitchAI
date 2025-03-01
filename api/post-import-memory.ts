import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MemoryPlatform, MemoryType } from '@/entities/market-memory';
import { api } from '@/libs/axios';

type Request = {
  file: File;

  userWalletAddress: string;
  type: MemoryType;
  platform?: MemoryPlatform;
  title: string;
  description?: string;
  price: number;
};

export const usePostImportMemory = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (req: Request): Promise<void> => {
    const formData = new FormData();

    formData.append('file', req.file);
    formData.append('userWalletAddress', req.userWalletAddress);
    formData.append('type', req.type);
    formData.append('platform', req.platform || MemoryPlatform.ELIZA_OS);
    formData.append('title', req.title);
    formData.append('description', req.description || '');
    formData.append('price', req.price.toString());

    await api.post(`/user/import-memory`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    await queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  const data = useMutation<void, AxiosError<Request>, Request>({
    mutationKey: ['import-memory'],
    mutationFn,
  });

  return { ...data };
};
