'use client';

import { useCallback, useMemo } from 'react';
import { hederaTestnet } from 'viem/chains';
import { usePublicClient, useSwitchChain } from 'wagmi';

export const useSwitchNetwork = () => {
  const client = usePublicClient();

  const currentChainId = client?.chain?.id;
  const targetChainId = hederaTestnet.id;

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
