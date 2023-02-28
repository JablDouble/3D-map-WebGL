import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Last name is required'),
  email: yup.string().email('Email must be valid').required('Email is required'),
  password: yup.string().min(8, 'At least 8 symbols').required('Password is required'),
});

export default validationSchema;
