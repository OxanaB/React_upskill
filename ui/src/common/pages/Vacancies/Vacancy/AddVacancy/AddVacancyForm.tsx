import React, { FC } from 'react';
import { PageCenterBlockContainer } from '../../../../containers/DefaultPage/DefaultPageCenter';
import InputField from '../../../../shared/Input/InputField';
import { Button } from '../../../../shared/Button/Button';
import { SelectField } from '../../../../shared/Input/SelectField';
import { workType, descConfig } from '../../../../constants/vacancyConsts';
import { positions } from '../../../../constants/userConsts';
import ErrorNotification from '../../../../shared/MessageNotification/ErrorNotification';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { FormikProps } from 'formik';
import { AddVacancyDto } from '../../../../dto/AddVacancyDto';

export const VacancyForm: FC<
  Pick<
    FormikProps<AddVacancyDto>,
    'errors' | 'handleChange' | 'handleSubmit' | 'setFieldValue' | 'values'
  >
> = ({ handleSubmit, handleChange, values, errors, setFieldValue }) => {
  const handleModelChange = (value: string) =>
    setFieldValue('description', value);
  return (
    <PageCenterBlockContainer centerBlockName="userpage__inner-info">
      <div className="userpage__inner-info--main">
        <div className="userpage__inner-info--about">
          <form onSubmit={handleSubmit}>
            <span className="userpage__inner-info--desc">Main information</span>
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
  );
};
