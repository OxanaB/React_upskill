import * as yup from 'yup';

export const addVacancySchema = yup.object({
  title: yup
    .string()
    .required('Please enter a title')
    .max(40, 'Entered title is too long'),
  description: yup.string().required('Please enter a description').max(10000),
  salary: yup
    .number()
    .min(10, 'Salary must be more than 10$')
    .max(1000, 'Too much salary'),
  email: yup
    .string()
    .required('Please fill a contact email')
    .email('Invalid email'),
});
