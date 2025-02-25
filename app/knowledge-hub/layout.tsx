import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - Knowledge Hub',
  description: 'Stitch AI - Knowledge Hub',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
