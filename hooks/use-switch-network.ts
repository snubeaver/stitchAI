'use client';

import { useEffect } from 'react';
import { mainnet, sepolia } from 'viem/chains';
import { useAccount, usePublicClient, useSwitchChain } from 'wagmi';

import { IS_MAINNET } from '@/constants';

export const useSwitchNetwork = () => {
  const { isConnected } = useAccount();

  const client = usePublicClient();

  const currentChainId = client?.chain?.id;
  const targetChainId = IS_MAINNET ? mainnet.id : sepolia.id;

  const { switchChain } = useSwitchChain();

  useEffect(() => {
    if (!currentChainId || !targetChainId || !isConnected) return;

    if (currentChainId === targetChainId) return;
    switchChain({ chainId: targetChainId });
  }, [currentChainId, isConnected, switchChain, targetChainId]);
};
