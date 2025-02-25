'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { Gnb } from '@/components/gnb';

import * as style from './style.css';

export default function Page() {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) router.replace('/main');
  }, [isConnected, router]);

  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>my page</div>
    </main>
  );
}
