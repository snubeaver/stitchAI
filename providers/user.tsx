'use client';

import { ReactNode } from 'react';

import { useGetUser } from '@/api/get-user';

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  useGetUser();

  return <>{children}</>;
};

export default UserProvider;
