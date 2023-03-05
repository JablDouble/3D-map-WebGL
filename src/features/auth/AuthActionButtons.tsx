import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/public-api';
import { GoogleAuthButton } from './GoogleAuthButton';

interface AuthActionsProps {
  to: string;
  isLoading?: boolean;
  type: 'signIn' | 'signUp';
}

const AuthActionButtons = ({ to, isLoading, type }: AuthActionsProps) => (
  <Grid container item spacing={2}>
    <Grid item xs={6}>
      <Link to={to}>
        <Button tabIndex={-1} color="secondary" disabled={isLoading}>
          Change method
        </Button>
      </Link>
    </Grid>
    <Grid item xs={6}>
      <Button color="primary" type="submit" isLoading={isLoading}>
        {type === 'signUp' ? 'Create account' : 'Login to account'}
      </Button>
    </Grid>
    <Grid item xs={12}>
      <GoogleAuthButton type={type} disabled={isLoading} />
    </Grid>
  </Grid>
);

export default AuthActionButtons;
