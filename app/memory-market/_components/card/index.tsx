'use client';

import { useAppKit } from '@reown/appkit/react';
import { HTMLAttributes, useMemo } from 'react';
import { useAccount } from 'wagmi';

import { ButtonPrimary } from '@/components/button/primary';
import { useDialog } from '@/hooks/use-dialog';
import { useSwitchNetwork } from '@/hooks/use-switch-network';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  memoryId: string;
  name: string;

  price: number;
  priceLabel: string;

  active?: boolean;
}

export const MemoryMarketCard = ({
  memoryId,
  name,
  price,
  priceLabel = '/month',
  active,
  ...props
}: Props) => {
  const { isConnected } = useAccount();
  const { open: openAppkit } = useAppKit();
  const { open: openDialog } = useDialog('memory-market-card');
  const { switchNetwork, needToSwitch } = useSwitchNetwork();

  const handleClick = async () => {
    if (!isConnected) return openAppkit();
    if (needToSwitch) return switchNetwork();
    openDialog({ params: { memoryId } });
  };

  const buttonText = useMemo(() => {
    if (!active) return 'Buy';
    if (!isConnected) return 'Connect Wallet';
    if (needToSwitch) return 'Switch Network';
    return 'Buy';
  }, [active, isConnected, needToSwitch]);

  return (
    <div className={style.wrapper} {...props}>
      <div className={style.header}>
        <div className={style.title}>{name}</div>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(price, { prefix: '$' })}</div>
          <div className={style.priceLabel}>{priceLabel}</div>
        </div>
      </div>
      <ButtonPrimary
        text={buttonText}
        size="medium"
        full
        disabled={!active}
        onClick={handleClick}
      />
    </div>
  );
};
