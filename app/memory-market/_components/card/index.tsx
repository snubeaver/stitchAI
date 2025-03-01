'use client';

import { useAppKit } from '@reown/appkit/react';
import { HTMLAttributes, useMemo } from 'react';
import { useAccount } from 'wagmi';

import { ButtonPrimary } from '@/components/button/primary';
import { MarketMemory } from '@/entities/market-memory';
import { useDialog } from '@/hooks/use-dialog';
import { useSwitchNetwork } from '@/hooks/use-switch-network';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  memory: MarketMemory;
}

export const MemoryMarketCard = ({ memory, ...props }: Props) => {
  const { isConnected } = useAccount();
  const { open: openAppkit } = useAppKit();
  const { open: openDialog } = useDialog('memory-market-card');
  const { switchNetwork, needToSwitch } = useSwitchNetwork();

  const handleClick = async () => {
    if (!isConnected) return openAppkit();
    if (needToSwitch) return switchNetwork();

    openDialog({ params: { memoryId: memory.id.toString(), type: memory.type } });
  };

  const buttonText = useMemo(() => {
    if (!isConnected) return 'Connect Wallet';
    if (needToSwitch) return 'Switch Network';
    return 'Buy';
  }, [isConnected, needToSwitch]);

  return (
    <div className={style.wrapper} {...props}>
      <div className={style.header}>
        <div className={style.title}>{memory.title}</div>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(memory.price, { prefix: '$' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
      </div>
      <ButtonPrimary text={buttonText} size="medium" full onClick={handleClick} />
    </div>
  );
};
