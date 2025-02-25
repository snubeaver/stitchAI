'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Address } from 'viem';
import { useAccount, useDisconnect } from 'wagmi';

import { truncateAddress } from '@/libs/address';

import * as style from './style.css';

interface Props {
  size?: 'medium' | 'large';
}
export const Account = ({ size = 'large' }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [opened, open] = useState(false);

  const { address } = useAccount();

  const toggle = useCallback(() => open(prev => !prev), []);
  useClickAway(dropdownRef, () => open(false));

  return (
    <div ref={dropdownRef} className={style.wrapper}>
      <div className={style.dropdownAction({ size })} onClick={toggle}>
        <div className={style.address}>{truncateAddress(address)}</div>
      </div>

      <div className={style.dropdownList({ status: opened ? 'opened' : 'closed' })}>
        <AccountAddress />
        <div className={style.divider} />
        <Disconnect />
      </div>
    </div>
  );
};

const AccountAddress = () => {
  const { address } = useAccount();
  const [text, setText] = useState<Address | string | undefined>(truncateAddress(address));

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(address || '');
    setText('Copied');

    setTimeout(() => setText(truncateAddress(address)), 2000);
  }, [address]);

  useEffect(() => {
    setText(truncateAddress(address));
  }, [address]);

  return (
    <div className={style.accountAddress} onClick={handleCopy}>
      {text}
    </div>
  );
};

const Disconnect = () => {
  const { disconnect } = useDisconnect();

  return (
    <div className={style.disconnect} onClick={() => disconnect()}>
      Disconnect
    </div>
  );
};
