import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

import { SignUpForm } from '../../../features/public-api';
import { CustomLink } from '../../../shared/public-api';

const SignUpPanel: FC<{}> = () => {
  return (
    <>
      <Typography variant="h6" color="textSecondary" mb={1}>
        START FOR FREE
      </Typography>
      <Typography variant="h2" mb={1}>
        Create new account
        <Typography component="span" variant="h3" color="primary">
          .
        </Typography>
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 500 }} color="textSecondary" mb={2}>
        Already a member? <CustomLink to="/sign-in">Sign In</CustomLink>
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPanel;
