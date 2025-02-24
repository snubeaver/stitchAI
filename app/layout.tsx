import { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = (await headers()).get('cookie');

  return (
    <html lang="en">
      <head></head>
      <body>
        <Web3Provider cookie={cookie}>{children}</Web3Provider>
      </body>
    </html>
  );
}
