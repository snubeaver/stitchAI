'use client';

import { hederaTestnet } from '@reown/appkit/networks';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { Config, cookieStorage, cookieToInitialState, createStorage, WagmiProvider } from 'wagmi';

import TanstackQueryProvider from './tanstack-query';

interface Props {
  children: React.ReactNode;
  cookie?: string | null;
}

const metadata = {
  name: 'Stitch AI',
  description: 'Stitch AI',
  url: '',
  icons: [''],
};

const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  networks: [hederaTestnet],
});

createAppKit({
  adapters: [wagmiAdapter],
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  networks: [hederaTestnet],
  defaultNetwork: hederaTestnet,
  themeMode: 'dark',
  metadata: metadata,
  features: {
    analytics: true,
    email: false,
    socials: [],
    emailShowWallets: false,
  },
  themeVariables: {
    '--w3m-border-radius-master': '20px',
  },
  featuredWalletIds: [
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709', // okx
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // metamask
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // trust
  ],
});

const Web3Provider = ({ children, cookie }: Props) => {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookie);
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
