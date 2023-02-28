import EmailIcon from '@mui/icons-material/Email';
import { Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AuthActionButtons,
  AuthSignInDto,
  PasswordTextField,
} from '../../../../entities/public-api';
import { TextField, useAppDispatch, useError, useLoading } from '../../../../shared/public-api';
import validationSchema from '../lib/validation';
import { signIn } from '../model';

const SignInForm: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading] = useLoading();
  const [error] = useError();

  const onSignInSubmit = async (signInInfo: AuthSignInDto) => {
    const signInResponse = await dispatch(signIn(signInInfo));
    if (signInResponse) {
      navigate('/home');
    }
  };

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: onSignInSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
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
          <Typography color="error" variant="subtitle2">
            {error}
          </Typography>
        </Grid>
      </Grid>
      <AuthActionButtons to="/sign-up" isLoading={isLoading} />
    </form>
  );
};

export default SignInForm;
