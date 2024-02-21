import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().required('Required').email('Invalid format'),
  password: yup.string().required('Required'),
});
