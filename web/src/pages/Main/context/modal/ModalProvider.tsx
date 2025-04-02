import { useState, ReactNode, useMemo } from 'react';
import { ModalContext } from '@/pages/Main/context/modal/ModalContext.tsx';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const value = useMemo(
    () => ({
      isModalOpen,
      closeModal,
      openModal,
      isUpdateModalOpen,
      openUpdateModal,
      closeUpdateModal
    }),
    [isModalOpen, closeModal, openModal, isUpdateModalOpen, openUpdateModal, closeUpdateModal]
  );

  return <ModalContext value={value}>{children}</ModalContext>;
};
