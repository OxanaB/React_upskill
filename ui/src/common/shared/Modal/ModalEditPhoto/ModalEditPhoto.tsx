import React from 'react';
import ModalForm from '../ModalForm';
import noavatar from '../../../../assets/images/no-avatar.png';
import nocompany from '../../../../assets/images/no-company.png';
import { useFormik } from 'formik';
import { uploadImageSchema } from '../../../utils/validation/uploadImageSchema';
import ErrorNotification from '../../MessageNotification/ErrorNotification';
import { useDispatch } from 'react-redux';
import { editPhotoLoadAction } from '../../../redux/actions/EditPhotoUserActions';

interface EditPhotoProps {
  id: string | number;
  avatar: string;
}

interface ModalEditPhotoProps {
  close: () => void;
  model?: EditPhotoProps;
  isEvaluate?: boolean;
  photo?: FileList | null;
  setPhoto?: any;
}

interface FileInput {
  file: FileList | null;
}

const ModalEditPhoto = ({
  close,
  model,
  isEvaluate = true,
  photo,
  setPhoto,
}: ModalEditPhotoProps) => {
  const initialValues: FileInput = {
    file: (isEvaluate && photo) || null,
  };

  const dispatch = useDispatch();

  const { handleSubmit, values, errors, dirty, setFieldValue } = useFormik({
    initialValues,
    validationSchema: uploadImageSchema,
    enableReinitialize: true,
    onSubmit(values: FileInput) {
      if (model && model.id && values.file && isEvaluate) {
        dispatch(editPhotoLoadAction(values.file, model.id.toString()));
      }
      if (!isEvaluate) {
        setPhoto('avatar', values.file);
      }
      close();
    },
  });

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(
      'file',
      event.currentTarget.files && event.currentTarget.files[0],
    );
  };

  return (
    <>
      <ModalForm
        handleSubmit={handleSubmit}
        close={close}
        name="Upload new photo"
        isSubmit={dirty}
      >
        Please upload a real photo and another users can recognize you or your
        company. We support JPG or PNG files.
        <div className="default-modal__img">
          <img
            src={
              (values.file && URL.createObjectURL(values.file)) ||
              model?.avatar ||
              (isEvaluate && noavatar) ||
              nocompany
            }
            alt="standard-avatar"
          />
          {errors.file && <ErrorNotification errors={errors.file} />}
        </div>
        <div className="browse-wrap">
          <div className="title">Choose a file to upload</div>
          <input
            type="file"
            name="upload"
            className="upload"
            title="Choose a file to upload"
            onChange={handleImage}
          />
        </div>
        <span className="upload-path"></span>
      </ModalForm>
    </>
  );
};

export default ModalEditPhoto;
