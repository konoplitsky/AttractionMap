import { useContext } from 'react';
import { ModalContext } from '@/pages/Main/context/modal/ModalContext.tsx';

export const useModal = () => useContext(ModalContext);
