import * as yup from 'yup';
import moment from 'moment';

export const editUserSchema = yup.object({
  salary: yup
    .number()
    .min(10, 'Salary must be more than 10$')
    .max(1000, 'Too much salary'),
  birthDate: yup
    .string()
    .test('DOB', 'Registration is available from the age of 18', value => {
      return value ? moment().diff(moment(value), 'years') >= 18 : true;
    }),
  city: yup
    .string()
    .min(3, 'City name is too short')
    .max(15, 'City name is too long'),
  tags: yup.string().max(250, 'Too many characters. Maximum characters is 250'),
  about: yup
    .string()
    .min(30, 'Tell us more about yourself')
    .max(1200, 'Too many characters. Maximum characters is 1200'),
});
