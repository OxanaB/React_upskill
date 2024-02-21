import React, { useEffect } from 'react';
import { DefaultPageContainer } from '../../../../containers/DefaultPage/DefaultPage';
import {
  DefaultPageCenterContainer,
  PageCenterBlockContainer,
} from '../../../../containers/DefaultPage/DefaultPageCenter';
import { useParams, useHistory } from 'react-router';
import InputField from '../../../../shared/Input/InputField';
import { useFormik } from 'formik';
import { AddVacancyDto } from '../../../../dto/AddVacancyDto';
import { Button } from '../../../../shared/Button/Button';
import { SelectField } from '../../../../shared/Input/SelectField';
import { workType, descConfig } from '../../../../constants/vacancyConsts';
import { positions } from '../../../../constants/userConsts';
import ErrorNotification from '../../../../shared/MessageNotification/ErrorNotification';
import { addVacancySchema } from '../../../../utils/validation/addVacancySchema';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddVacancyAction } from '../../../../redux/actions/OperateVacancyActions';
import { addVacancyStateSelector } from '../../../../redux/selectors/vacancySelector';
import { Loader } from '../../../../shared/Loader/Loader';
import { toast } from 'react-toastify';
import { MessageNotification } from '../../../../shared/MessageNotification/MessageNotification';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { resetVacancyAction } from '../../../../redux/actions/VacancyActions';

export const AddVacancy = () => {
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

  const handleModelChange = (value: string) =>
    setFieldValue('description', value);

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
            <PageCenterBlockContainer centerBlockName="userpage__inner-info">
              <div className="userpage__inner-info--main">
                <div className="userpage__inner-info--about">
                  <form onSubmit={handleSubmit}>
                    <span className="userpage__inner-info--desc">
                      Main information
                    </span>
                    <div className="defaultpage__inner-line"></div>
                    <InputField
                      type="text"
                      placeholder="Enter a title"
                      name="title"
                      onChange={handleChange}
                      value={values.title}
                      required
                      errors={errors.title}
                      label="Vacancy title:"
                    ></InputField>
                    <InputField
                      type="text"
                      placeholder="Enter an email"
                      name="email"
                      onChange={handleChange}
                      errors={errors.email}
                      value={values.email}
                      required
                      label="Contact email:"
                    ></InputField>
                    <div className="defaultpage__inner-line"></div>
                    <div className="editprofile--wrapper">
                      <div className="editprofile__content-item">
                        <p>Work type:</p>
                        <SelectField
                          name="worktype"
                          options={workType}
                          current={{
                            value: values.worktype,
                            label: values.worktype,
                          }}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="editprofile__content-item">
                        <p>Starting salary ($)</p>
                        <InputField
                          name="salary"
                          type="number"
                          placeholder="Enter a salary..."
                          value={values.salary}
                          onChange={handleChange}
                          errors={errors.salary}
                        />
                      </div>
                      <div className="editprofile__content-item">
                        <p>Position</p>
                        <SelectField
                          name="position"
                          options={positions}
                          current={{
                            value: values.position,
                            label: values.position,
                          }}
                          onChange={setFieldValue}
                        />
                      </div>
                    </div>
                    <div className="defaultpage__inner-line"></div>
                    <ErrorNotification errors={errors.description} />
                    <FroalaEditorComponent
                      model={values.description}
                      onModelChange={handleModelChange}
                      config={descConfig}
                    />
                    <Button type="submit" btnTheme="btn-small">
                      Add vacancy
                    </Button>
                  </form>
                </div>
              </div>
            </PageCenterBlockContainer>
          </DefaultPageCenterContainer>
        </DefaultPageContainer>
      </div>
    </div>
  );
};
