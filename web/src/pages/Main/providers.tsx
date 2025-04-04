import { ReactNode } from 'react';
import { RoleProvider } from './contexts/role';
import { ModalProvider } from './contexts/modal';
import { AttractionIdProvider } from './contexts/attractionId';

interface ProvidersProps {
  children?: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <RoleProvider>
    <AttractionIdProvider>
      <ModalProvider>{children}</ModalProvider>
    </AttractionIdProvider>
  </RoleProvider>
);
