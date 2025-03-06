import { useCallback } from 'react';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';

interface UseEthTransferProps {
  onSuccess?: (txHash: string) => void;
  onError?: (error: Error) => void;
}

export const useEthTransfer = ({ onSuccess, onError }: UseEthTransferProps = {}) => {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const transfer = useCallback(async (
    toAddress: string,
    amount: string // ETH amount in ether units (e.g., "0.1")
  ) => {
    try {
      if (!walletClient || !address || !publicClient) {
        throw new Error('Wallet not connected');
      }

      // Convert ETH amount to Wei
      const amountInWei = parseEther(amount);

      // Send transaction
      const txHash = await walletClient.sendTransaction({
        to: toAddress as `0x${string}`,
        value: amountInWei,
        account: address,
      });

      // Wait for transaction to be mined
      const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

      onSuccess?.(receipt.transactionHash);
      return receipt;
    } catch (error) {
      onError?.(error as Error);
      throw error;
    }
  }, [walletClient, publicClient, address, onSuccess, onError]);

  return {
    transfer,
    isReady: !!walletClient && !!address,
  };
};