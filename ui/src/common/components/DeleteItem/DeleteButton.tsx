import React from 'react';
import { Button } from '../../shared/Button/Button';
import useModal from '../../hooks/useModal';
import ModalConfirm from '../../shared/Modal/ModalConfirm/ModalConfirm';

interface DeleteButtonProps {
  del: () => void;
}

const DeleteButton = ({ del }: DeleteButtonProps) => {
  const [Modal, open, close] = useModal();
  const handleOpenModal = () => open();
  return (
    <>
      <Button btnTheme="btn-small" btnColor="danger" onClick={handleOpenModal}>
        Delete
      </Button>
      <Modal>
        <ModalConfirm
          close={close}
          operate={del}
          text="Are you sure you want to delete this page?"
        />
      </Modal>
    </>
  );
};

export default DeleteButton;
