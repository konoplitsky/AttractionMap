import { ReactNode, useMemo, useState } from 'react';
import { RoleContext } from './RoleContext';
import { typeRole } from '@/pages/Main/lib/const.ts';

export interface RoleProviderProps {
  children: ReactNode;
}

export const RoleProvider = ({ children }: RoleProviderProps) => {
  const [role, setRole] = useState<Role>(typeRole.user);
  const [idAttraction, setIdAttraction] = useState<string | null>(null);

  const toggleRole = () =>
    setRole((prevRole) => (prevRole === typeRole.user ? typeRole.admin : typeRole.user));

  const value = useMemo(
    () => ({ role, toggleRole, idAttraction, setIdAttraction }),
    [role, toggleRole, idAttraction, setIdAttraction]
  );

  return <RoleContext value={value}>{children}</RoleContext>;
};
