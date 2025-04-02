import { createContext, Dispatch, SetStateAction } from 'react';
import { typeRole } from '../../lib/const.ts';

export interface RoleContextProps {
  role: Role;
  toggleRole: () => void;
  idAttraction: string | null;
  setIdAttraction: Dispatch<SetStateAction<string | null>>;
}

export const RoleContext = createContext<RoleContextProps>({
  role: typeRole.user,
  toggleRole: () => {},
  idAttraction: '',
  setIdAttraction: () => {}
});
