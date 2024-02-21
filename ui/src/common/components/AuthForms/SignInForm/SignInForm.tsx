import React from 'react';
import { useFormik } from 'formik';
import InputField from '../../../shared/Input/InputField';
import Icon from '../../../shared/Icon/Icon';
import InputPasswordField from '../../../shared/Input/InputPasswordField';
import { Button } from '../../../shared/Button/Button';
import { AuthFormComponent } from '../../../interfaces/AuthFormComponent';
import { useDispatch } from 'react-redux';
import { signInLoadAction } from '../../../redux/actions/SignInActions';
import { signInSchema } from '../../../utils/validation/signInSchema';

const SignInForm = () => {
  const dispatch = useDispatch();
  const initialValues: AuthFormComponent = {
    email: '',
    password: '',
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    validationSchema: signInSchema,
    onSubmit(values) {
      dispatch(signInLoadAction(values));
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Enter an email"
          name="email"
          onChange={handleChange}
          value={values.email}
          errors={errors.email}
        >
          <Icon iconName="icon-mail" />
        </InputField>
        <InputPasswordField
          type="password"
          placeholder="Enter a password"
          name="password"
          onChange={handleChange}
          value={values.password}
          errors={errors.password}
        />
        <div className="auth__inner-buttons">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
