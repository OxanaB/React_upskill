import React, { useEffect } from 'react';
import { DefaultPageContainer } from '../../../../containers/DefaultPage/DefaultPage';
import { DefaultPageCenterContainer } from '../../../../containers/DefaultPage/DefaultPageCenter';
import { useParams, useHistory } from 'react-router';

import { useFormik } from 'formik';
import { AddVacancyDto } from '../../../../dto/AddVacancyDto';
import { workType } from '../../../../constants/vacancyConsts';
import { addVacancySchema } from '../../../../utils/validation/addVacancySchema';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAddVacancyAction } from '../../../../redux/actions/OperateVacancyActions';
import { addVacancyStateSelector } from '../../../../redux/selectors/vacancySelector';
import { Loader } from '../../../../shared/Loader/Loader';
import { toast } from 'react-toastify';
import { MessageNotification } from '../../../../shared/MessageNotification/MessageNotification';

import { resetVacancyAction } from '../../../../redux/actions/VacancyActions';
import { VacancyForm } from './AddVacancyForm';

const AddVacancy = () => {
  const { companyUrl } = useParams<{ companyUrl: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, isLoading, errorMessage } = useSelector(
    addVacancyStateSelector,
  );

  const initialValues: AddVacancyDto = {
    title: '',
    description: '',
    worktype: workType[0].label,
    salary: '',
    position: '',
    email: '',
    companyUrl: companyUrl,
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: addVacancySchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit(values: AddVacancyDto) {
      dispatch(fetchAddVacancyAction(values));
    },
  });

  useEffect(() => {
    if (isFetching && !isLoading && !errorMessage && companyUrl) {
      history.push(`/companies/${values.companyUrl}`);
      dispatch(resetVacancyAction());
      toast.success('Your vacancy was successfully created!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  }, [
    isFetching,
    isLoading,
    errorMessage,
    history,
    companyUrl,
    values.companyUrl,
    dispatch,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="vacancy">
      <div className="vacancy__inner">
        <DefaultPageContainer>
          <DefaultPageCenterContainer centerInnerName="company__form">
            {errorMessage && (
              <MessageNotification error={errorMessage?.error} />
            )}
            <h2>Add vacancy</h2>
            <VacancyForm
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
              values={values}
            />
          </DefaultPageCenterContainer>
        </DefaultPageContainer>
      </div>
    </div>
  );
};

export default AddVacancy;
