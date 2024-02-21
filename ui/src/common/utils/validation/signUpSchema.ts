import * as yup from 'yup';

export const signUpSchema = yup.object({
  email: yup.string().required('Required').email('Invalid format'),
  firstName: yup
    .string()
    .required('Required')
    .min(3, 'Must be exactly 3 characters')
    .max(24, 'Must be fewer characters'),
  lastName: yup
    .string()
    .required('Required')
    .min(3, 'Must be exactly 3 characters')
    .max(24, 'Must be fewer characters'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Must be exactly 6 characters'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
