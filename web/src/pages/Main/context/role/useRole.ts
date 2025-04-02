import { RoleContext } from '@/pages/Main/context/role/RoleContext.tsx';
import { useContext } from 'react';

export const useRole = () => useContext(RoleContext);
