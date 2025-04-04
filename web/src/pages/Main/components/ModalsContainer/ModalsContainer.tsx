import { Modal } from '@gravity-ui/uikit';
import { AttractionForm } from '../AttractionForm/AttractionForm.tsx';
import { useModal } from '../../contexts/modal';

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
