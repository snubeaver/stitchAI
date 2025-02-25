import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - My Page',
  description: 'Stitch AI - My Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
