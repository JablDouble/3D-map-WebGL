import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import { Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService, AuthSignUpDto, PasswordTextField } from '../../../../entities/public-api';
import { TextField, useAppDispatch, useError, useLoading } from '../../../../shared/public-api';
import AuthActionButtons from '../../AuthActionButtons';
import validationSchema from '../lib/validation';

const SignUpForm: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading] = useLoading();
  const [error] = useError();

  const onSignUpSubmit = async (user: AuthSignUpDto) => {
    const signUpResponse = await dispatch(AuthService.createNewUser(user));
    if (signUpResponse) {
      navigate('/account-verification');
    }
  };

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: onSignUpSubmit,
  });

  return (
    <form onSubmit={handleSubmit} data-testid="sign-up-form">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="First name"
            fullWidth
            variant="filled"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !!errors.name}
            helperText={touched.name ? errors.name : undefined}
            icon={<AccountBoxIcon color="secondary" />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="surname"
            label="Last name"
            fullWidth
            variant="filled"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.surname && !!errors.surname}
            helperText={touched.surname ? errors.surname : undefined}
            icon={<AccountBoxIcon color="secondary" />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            fullWidth
            variant="filled"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email ? errors.email : undefined}
            icon={<EmailIcon color="secondary" />}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordTextField
            id="password"
            label="Password"
            fullWidth
            variant="filled"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password ? errors.password : undefined}
          />
        </Grid>
        <Grid item mb={1}>
          {error && (
            <Typography color="error" data-testid="sign-up-form-error" variant="subtitle2">
              {error}
            </Typography>
          )}
        </Grid>
      </Grid>
      <AuthActionButtons type="signUp" to="/sign-in" isLoading={isLoading} />
    </form>
  );
};

export default SignUpForm;
