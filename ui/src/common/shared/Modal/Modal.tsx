import React from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
  children: React.ReactElement | React.ReactElement[];
  isOpen: boolean;
  close: () => void;
  elementId: string;
}

const Modal = ({
  children,
  isOpen = false,
  close,
  elementId = 'root',
}: ModalProps) => {
  const portalDiv = document.getElementById('root');
  if (isOpen === false) {
    return null;
  }
  return (
    portalDiv &&
    createPortal(
      <>
        <div className="modal-wrapper">
          <div className="modal-wrapper__mask" onClick={close} />
          <div className="modal-wrapper__container">{children}</div>
        </div>
      </>,
      portalDiv,
    )
  );
};

export default Modal;
