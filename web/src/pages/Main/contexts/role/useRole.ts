import { RoleContext } from './RoleContext.tsx';
import { useContext } from 'react';

export const useRole = () => useContext(RoleContext);
