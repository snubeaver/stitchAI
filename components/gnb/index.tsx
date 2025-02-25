'use client';

import { useAppKit } from '@reown/appkit/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

import { Account } from '../account';
import { ButtonPrimary } from '../button/primary';
import * as style from './style.css';

interface Props {
  type: 'app' | 'web';
}
export const Gnb = ({ type = 'app' }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isConnected } = useAccount();

  const { open: openConnectModal } = useAppKit();

  const checkActive = (path: string) => pathname.includes(path);

  if (type === 'web') {
    return (
      <div className={style.wrapper({ type })}>
        <Image
          className={style.logo}
          src={'/images/logo.png'}
          alt="logo"
          width={110}
          height={24}
          onClick={() => router.push('/')}
        />
      </div>
    );
  }

  return (
    <div className={style.wrapper({ type })}>
      <Image
        className={style.logo}
        src={'/images/logo.png'}
        alt="logo"
        width={110}
        height={24}
        onClick={() => router.push('/')}
      />
      <div className={style.menu}>
        <div
          className={style.menuItem({ active: checkActive('memory-market') })}
          onClick={() => router.push('/memory-market')}
        >
          Memory Market
        </div>
        <div
          className={style.menuItem({ active: checkActive('knowledge-hub') })}
          onClick={() => router.push('/knowledge-hub')}
        >
          Knowledge Hub
        </div>
        {isConnected && (
          <div
            className={style.menuItem({ active: checkActive('my-page') })}
            onClick={() => router.push('/my-page')}
          >
            My Page
          </div>
        )}
      </div>
      {isConnected ? (
        <Account size="large" />
      ) : (
        <ButtonPrimary text="Connect Wallet" onClick={() => openConnectModal()} />
      )}
    </div>
  );
};
