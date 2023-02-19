import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid } from '@mui/material';
import React, { FC } from 'react';

import { Button, TextField } from '../../../shared/public-api';

const SignUpForm: FC<{}> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id="name"
          label="First name"
          fullWidth
          variant="filled"
          icon={<AccountBoxIcon color="secondary" />}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="surname"
          label="Last name"
          fullWidth
          variant="filled"
          icon={<AccountBoxIcon color="secondary" />}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="mail"
          label="Email"
          fullWidth
          variant="filled"
          icon={<EmailIcon color="secondary" />}
        />
      </Grid>
      <Grid item xs={12} mb={2}>
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="filled"
          icon={<VisibilityIcon color="secondary" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Button color="secondary">Change method</Button>
      </Grid>
      <Grid item xs={6}>
        <Button color="primary">Create account</Button>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
