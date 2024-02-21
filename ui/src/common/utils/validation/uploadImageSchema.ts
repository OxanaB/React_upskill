import { object, mixed } from 'yup';

export const uploadImageSchema = object().shape({
  file: mixed()
    .test('fileType', 'Please, upload an image', value => {
      if (!value) return true;
      return value.type && value.type.includes('image');
    })
    .test('fileSize', 'Your image is too large', value => {
      if (!value) return true;
      return value.size && value.size <= 1000000;
    }),
});
