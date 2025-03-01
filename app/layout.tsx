import '@/styles/global.css';

import { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import { headers } from 'next/headers';

import DialogProvider from '@/providers/dialog';
import UserProvider from '@/providers/user';
import Web3Provider from '@/providers/web3';

export const metadata: Metadata = {
  title: 'Stitch AI',
  description: 'Stitch AI',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const outfit = Outfit({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = (await headers()).get('cookie');

  return (
    <html lang="en" className={outfit.className}>
      <body>
        <Web3Provider cookie={cookie}>
          <UserProvider>
            <DialogProvider>{children}</DialogProvider>
          </UserProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
