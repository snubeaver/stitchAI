import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - Memory Market',
  description: 'Stitch AI - Memory Market',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
