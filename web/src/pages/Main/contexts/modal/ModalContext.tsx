import { createContext } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isUpdateModalOpen: boolean;
  openUpdateModal: () => void;
  closeUpdateModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  isUpdateModalOpen: false,
  openUpdateModal: () => {},
  closeUpdateModal: () => {}
});
