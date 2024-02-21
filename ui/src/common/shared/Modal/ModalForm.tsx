import React from 'react';
import { Button } from '../Button/Button';

interface ModalFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  close: () => void;
  children: React.ReactNode;
  name: string;
  isSubmit?: boolean;
}

const ModalForm = ({
  handleSubmit,
  close,
  children,
  name,
  isSubmit = true,
}: ModalFormProps) => (
  <>
    <div className="modal-wrapper__container--warning">
      <span className="modal-wrapper__warning">{name}</span>
    </div>
    <form onSubmit={handleSubmit} className="default-modal">
      {children}
      <div className="default-modal__buttons">
        {isSubmit && (
          <Button btnTheme="btn-small" type="submit">
            Submit
          </Button>
        )}
        <Button btnTheme="btn-small" onClick={close}>
          Close
        </Button>
      </div>
    </form>
  </>
);

export default ModalForm;
