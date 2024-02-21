import React, { useCallback, useState } from 'react';
import Modal from '../shared/Modal/Modal';

const useModal = (elementId = 'root'): any => {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(
    (location): any => {
      setOpen(true);
    },
    [setOpen],
  );
  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const ModalWrapper = useCallback(
    ({ children }) => {
      return (
        <Modal isOpen={isOpen} close={close} elementId={elementId}>
          {children}
        </Modal>
      );
    },
    [isOpen, close, elementId],
  );

  return [ModalWrapper, open, close, isOpen];
};

export default useModal;
