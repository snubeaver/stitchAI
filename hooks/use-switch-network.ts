'use client';

import { useCallback, useMemo } from 'react';
import { mainnet, sepolia } from 'viem/chains';
import { usePublicClient, useSwitchChain } from 'wagmi';

import { IS_MAINNET } from '@/constants';

export const useSwitchNetwork = () => {
  const client = usePublicClient();

  const currentChainId = client?.chain?.id;
  const targetChainId = IS_MAINNET ? mainnet.id : sepolia.id;

  const { switchChain } = useSwitchChain();

  const needToSwitch = useMemo(() => {
    if (!currentChainId || !targetChainId) return false;
    if (currentChainId === targetChainId) return false;
    return true;
  }, [currentChainId, targetChainId]);

  const switchNetwork = useCallback(() => {
    if (!needToSwitch) return;

    switchChain({ chainId: targetChainId });
  }, [needToSwitch, switchChain, targetChainId]);

  return { switchNetwork, needToSwitch };
};
