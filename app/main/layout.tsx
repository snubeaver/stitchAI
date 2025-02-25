import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI',
  description: 'Stitch AI',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
