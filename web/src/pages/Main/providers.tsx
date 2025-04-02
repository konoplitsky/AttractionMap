import { ReactNode } from 'react';
import { ModalProvider } from '@/pages/Main/context/modal/ModalProvider.tsx';
import { RoleProvider } from '@/pages/Main/context/role/RoleProvider.tsx';

interface ProvidersProps {
  children?: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <RoleProvider>
    <ModalProvider>{children}</ModalProvider>
  </RoleProvider>
);
