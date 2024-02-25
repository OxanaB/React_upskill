import React, { FC } from 'react';
import { Button } from '../../../shared/Button/Button';
import InputField from '../../../shared/Input/InputField';
import ErrorNotification from '../../../shared/MessageNotification/ErrorNotification';
import { AddCompanyDto } from '../../../dto/AddCompanyDto';
import { FormikProps } from 'formik';

const CompanyForm: FC<
  Pick<
    FormikProps<AddCompanyDto>,
    'errors' | 'handleChange' | 'handleSubmit' | 'values'
  >
> = ({ errors, handleChange, handleSubmit, values }) => {
  return (
    <form onSubmit={handleSubmit}>
      <span className="userpage__inner-info--desc">Main information</span>
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
  );
};

export default CompanyForm;
