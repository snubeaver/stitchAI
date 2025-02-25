'use client';

import { useAppKit } from '@reown/appkit/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { ButtonPrimary } from '@/component/button/primary';
import { Gnb } from '@/component/gnb';

import * as style from './style.css';

export default function Page() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { open: openConnectModal } = useAppKit();

  useEffect(() => {
    if (isConnected) router.replace('/my-page');
  }, [isConnected, router]);

  return (
    <main className={style.main}>
      <Gnb type="app" />
      {!isConnected && (
        <div className={style.button}>
          <ButtonPrimary text="Connect Wallet" onClick={() => openConnectModal()} />
        </div>
      )}
    </main>
  );
}
