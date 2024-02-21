import React from 'react';
import ModalForm from '../ModalForm';

import './ModalConfirm.scss';

interface ModalConfirmProps {
  close: () => void;
  location?: string;
  operate?: () => void;
  text?: string;
}

const ModalConfirm = ({
  close,
  location,
  operate,
  text,
}: ModalConfirmProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (location) {
      window.location.replace(location);
    }
    if (operate) {
      operate();
    }
    close();
  };
  return (
    <>
      <ModalForm handleSubmit={handleSubmit} close={close} name="Warning">
        {text
          ? text
          : `You have changed your basic information. Are you sure you want to leave
        without saving your changes?`}
      </ModalForm>
    </>
  );
};

export default ModalConfirm;
