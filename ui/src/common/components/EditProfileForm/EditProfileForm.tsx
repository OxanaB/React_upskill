import React, { useState } from 'react';
import { useFormik } from 'formik';
import InputField from '../../shared/Input/InputField';
import { Button } from '../../shared/Button/Button';
import { SelectField } from '../../shared/Input/SelectField';
import DatePicker from 'react-datepicker';
import { editUserSchema } from '../../utils/validation/editUserSchema';
import ErrorNotification from '../../shared/MessageNotification/ErrorNotification';
import useModal from '../../hooks/useModal';
import ModalConfirm from '../../shared/Modal/ModalConfirm/ModalConfirm';
import { editProfileLoadAction } from '../../redux/actions/EditProfileActions';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector } from '../../redux/selectors/profileSelector';
import { jobStatus, positions } from '../../constants/userConsts';
import { Prompt } from 'react-router';
import { Location } from 'history';
import { EditProfileFormProps } from '../../interfaces/EditProfileFormProps';

import 'react-datepicker/dist/react-datepicker.css';

const EditProfileForm = () => {
  const [Modal, open, close] = useModal();
  const dispatch = useDispatch();
  const { me } = useSelector(getProfileSelector);
  const [location, setLocation] = useState('');

  const initialValues: EditProfileFormProps = {
    birthDate: me?.birthDate ?? '',
    status: me?.status ?? '',
    city: me?.city ?? '',
    about: me?.about ?? '',
    position: me?.position ?? '',
    tags: Array.isArray(me?.tags) ? me?.tags.join() : '',
    salary: me?.salary ?? '',
  };
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    dirty,
    setFieldValue,
  } = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: editUserSchema,
    enableReinitialize: true,
    onSubmit(values) {
      const keywords = values.tags ? values.tags.toString().split(/,[ ]+/) : [];
      dispatch(editProfileLoadAction({ ...values, tags: keywords }));
    },
  });

  const handleOpenModal = (location: Location<any>) => {
    setLocation(location.pathname);
    open();
    return false;
  };

  return (
    <>
      <Prompt when={dirty} message={handleOpenModal} />
      <form onSubmit={handleSubmit}>
        <div className="editprofile__content">
          <h4>Job:</h4>
          <div className="editprofile--wrapper">
            <div className="editprofile__content-item">
              <p>Starting salary ($)</p>
              <InputField
                name="salary"
                type="number"
                max="1000"
                min="10"
                placeholder="Enter a salary..."
                value={values.salary}
                onChange={handleChange}
                errors={errors.salary}
              />
            </div>
            <div className="editprofile__content-item">
              <p>Job status</p>
              <SelectField
                name="status"
                options={jobStatus}
                current={{ value: values.status, label: values.status }}
                onChange={setFieldValue}
              />
            </div>
            <div className="editprofile__content-item">
              <p>Position</p>
              <SelectField
                name="position"
                options={positions}
                current={{ value: values.position, label: values.position }}
                onChange={setFieldValue}
              />
            </div>
          </div>
        </div>

        <div className="editprofile__content">
          <h4>Personal information:</h4>
          <div className="editprofile__content-item">
            <p>Birthdate</p>
            <DatePicker
              name="birthDate"
              placeholderText="Enter a birthdate"
              selected={
                (values.birthDate && new Date(values.birthDate)) || null
              }
              onChange={(date: Date) =>
                date && setFieldValue('birthDate', date)
              }
            />
            <ErrorNotification errors={errors.birthDate} />
          </div>
          <div className="editprofile__content-item">
            <p>City</p>
            <InputField
              name="city"
              type="text"
              placeholder="Enter a city"
              value={values.city}
              onChange={handleChange}
              errors={errors.city}
            />
          </div>
        </div>

        <div className="editprofile__content">
          <h4>Keywords:</h4>
          <div className="editprofile__content-item">
            <InputField
              name="tags"
              type="text"
              placeholder="Enter keywords separated by commas..."
              value={values.tags}
              onChange={handleChange}
              errors={errors.tags}
            />
          </div>
        </div>

        <div className="editprofile__content">
          <h4>About:</h4>
          <div className="editprofile__content-item">
            <textarea
              name="about"
              placeholder="Describe yourself shortly..."
              value={values.about}
              onChange={handleChange}
              rows={4}
            />
            <ErrorNotification errors={errors.about} />
          </div>
        </div>
        <Button type="submit" btnTheme="btn-small">
          Save
        </Button>
      </form>
      <Modal>
        <ModalConfirm close={close} location={location} />
      </Modal>
    </>
  );
};

export default EditProfileForm;
