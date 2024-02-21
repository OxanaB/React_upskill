import * as yup from 'yup';

export const addCompanySchema = yup.object({
  name: yup
    .string()
    .required('Please enter a company name')
    .max(10, 'Entered company name is too long'),
  address: yup
    .string()
    .required('Please enter a company main office address')
    .min(5, 'Your value is too short'),
  companyUrl: yup
    .string()
    .required('Please enter a company url')
    .matches(
      /^[A-Za-z]+$/,
      'You entered an incorrect value. Enter a url without special characters',
    )
    .min(3, 'A company url is too short')
    .max(10, 'A company url is too long'),
  website: yup
    .string()
    .required('Please enter a company website')
    .matches(
      /* eslint-disable-next-line */
      /[-a-zA-Z0-9@:%._\~+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\.~#+?&//=]*)?/gi,
      'You entered an incorrect website',
    ),
  description: yup.string().max(35, 'Entered description is too long'),
  year: yup
    .number()
    .max(new Date().getFullYear(), 'Enter a correct year of foundation')
    .min(1800, 'Enter a correct year of foundation'),
  staff: yup
    .number()
    .max(1000, 'Enter a correct staff number')
    .min(0, 'Enter a correct staff number'),
  about: yup.string().min(70, 'Please tell more about your company'),
});
