import { Modal } from '@gravity-ui/uikit';
import AttractionForm from '@/pages/Main/components/AttractionForm/AttractionForm.tsx';
import { useModal } from '@/pages/Main/context/modal';

export const ModalsContainer = () => {
  const { isModalOpen, closeModal, isUpdateModalOpen, closeUpdateModal } = useModal();

  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal}>
        <AttractionForm type='create' />
      </Modal>
      <Modal open={isUpdateModalOpen} onClose={closeUpdateModal}>
        <AttractionForm type='update' />
      </Modal>
    </>
  );
};
