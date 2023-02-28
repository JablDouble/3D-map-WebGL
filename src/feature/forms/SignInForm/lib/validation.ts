import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Email must be valid').required('Email is required'),
  password: yup.string().min(8, 'At least 8 symbols').required('Password is required'),
});

export default validationSchema;
