import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import nocompany from '../../../../assets/images/no-company.png';
import InputField from '../../../shared/Input/InputField';
import { BlockPicker } from 'react-color';
import ModalEditPhoto from '../../../shared/Modal/ModalEditPhoto/ModalEditPhoto';
import useModal from '../../../hooks/useModal';
import ErrorNotification from '../../../shared/MessageNotification/ErrorNotification';
import { Button } from '../../../shared/Button/Button';
import { AddCompanyDto } from '../../../dto/AddCompanyDto';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddCompanyAction } from '../../../redux/actions/AddCompanyActions';
import { addCompanyStateSelector } from '../../../redux/selectors/companySelector';
import { useHistory } from 'react-router';
import { Loader } from '../../../shared/Loader/Loader';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import { addCompanySchema } from '../../../utils/validation/addCompanySchema';
import { toast } from 'react-toastify';

export const AddCompany = () => {
  const [Modal, open, close] = useModal();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, isLoading, errorMessage } = useSelector(
    addCompanyStateSelector,
  );

  const initialValues: AddCompanyDto = {
    name: '',
    description: '',
    background: '#6979f8',
    avatar: null,
    companyUrl: '',
    website: '',
    address: '',
    year: '',
    staff: '',
    about: '',
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: addCompanySchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit(values: AddCompanyDto) {
      dispatch(fetchAddCompanyAction(values));
    },
  });

  useEffect(() => {
    if (isFetching && !isLoading && !errorMessage && values.companyUrl) {
      history.push(`/companies/${values.companyUrl}`);
      toast.success('Your company was successfully created!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  }, [isFetching, isLoading, errorMessage, history, values.companyUrl]);

  const handleChangeColor = (color: any) => {
    setFieldValue('background', color.hex);
  };

  const handleEditPhoto = () => open();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="company">
      <div style={{ background: values.background }} className="company__main">
        <div className="container">
          <div
            style={{ background: values.background }}
            className="company__main company__wrapper"
          >
            <div className="company__main-text">
              <h1 className="company__main-text--title">
                {values.name?.length > 15
                  ? `${values.name?.substring(0, 15)}...`
                  : values.name || 'Company name'}
              </h1>
              <h2 className="company__main-text--subtitle">
                {values.description?.length > 40
                  ? `${values.description?.substring(0, 40)}...`
                  : values.description || 'Company description'}
              </h2>
            </div>
            <div className="company__main-logo add-logo">
              <div className="company__main-color">
                <BlockPicker
                  color={values.background}
                  onChange={handleChangeColor}
                />
              </div>
              <div className="company__main-logo--img">
                <img
                  src={
                    (values.avatar && URL.createObjectURL(values.avatar)) ||
                    nocompany
                  }
                  alt="logo-company"
                />
                <div
                  className="company__main-logo--edit"
                  onClick={handleEditPhoto}
                >
                  <span>Set a photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal>
        <ModalEditPhoto
          close={close}
          isEvaluate={false}
          setPhoto={setFieldValue}
        />
      </Modal>
      <div className="company__inner">
        <div className="defaultpage">
          <div className="container">
            {errorMessage && (
              <MessageNotification error={errorMessage?.error} />
            )}
            <div className="defaultpage__inner">
              <div className="defaultpage__inner-center company__form">
                <h2 className="editproavatar__title">Add company</h2>
                <div className="defaultpage__inner-block">
                  <form onSubmit={handleSubmit}>
                    <span className="userpage__inner-info--desc">
                      Main information
                    </span>
                    <div className="defaultpage__inner-line"></div>
                    <InputField
                      type="text"
                      placeholder="Company name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      required
                      errors={errors.name}
                      label="Company name:"
                    ></InputField>
                    <InputField
                      type="text"
                      placeholder="Company description"
                      name="description"
                      onChange={handleChange}
                      errors={errors.description}
                      value={values.description}
                      label="Description:"
                    ></InputField>
                    <InputField
                      type="text"
                      placeholder="Company URL"
                      name="companyUrl"
                      onChange={handleChange}
                      errors={errors.companyUrl}
                      value={values.companyUrl}
                      required
                      label="Company URL:"
                    ></InputField>
                    <InputField
                      type="text"
                      placeholder="Company website"
                      name="website"
                      onChange={handleChange}
                      errors={errors.website}
                      value={values.website}
                      required
                      label="Company website:"
                    ></InputField>
                    <InputField
                      type="text"
                      placeholder="Company address"
                      name="address"
                      onChange={handleChange}
                      errors={errors.address}
                      value={values.address}
                      required
                      label="Main office address:"
                    ></InputField>
                    <div className="defaultpage__inner-block--minform">
                      <span className="userpage__inner-info--desc">
                        Additional information
                      </span>
                      <div className="defaultpage__inner-line"></div>
                      <div className="defaultpage__inner-block--minform inputs">
                        <InputField
                          type="number"
                          placeholder="Year of foundation"
                          name="year"
                          onChange={handleChange}
                          errors={errors.year}
                          value={values.year}
                          label="Year of foundation:"
                        ></InputField>
                        <InputField
                          type="number"
                          placeholder="Number of staff"
                          name="staff"
                          errors={errors.staff}
                          onChange={handleChange}
                          value={values.staff}
                          label="Number of staff:"
                        ></InputField>
                      </div>
                    </div>
                    <div className="defaultpage__inner-line"></div>
                    <textarea
                      name="about"
                      placeholder="Describe your company shortly"
                      value={values.about}
                      onChange={handleChange}
                      rows={4}
                    />
                    <ErrorNotification errors={errors.about?.toString()} />
                    <Button type="submit" btnTheme="btn-small">
                      Add company
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
