import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../shared/public-api';

interface AuthActionsProps {
  to: string;
  isLoading?: boolean;
}

export const AuthActionButtons = ({ to, isLoading }: AuthActionsProps) => (
  <Grid container item spacing={2}>
    <Grid item xs={6}>
      <Link to={to}>
        <Button tabIndex={-1} color="secondary">
          Change method
        </Button>
      </Link>
    </Grid>
    <Grid item xs={6}>
      <Button color="primary" type="submit" isLoading={isLoading}>
        Create account
      </Button>
    </Grid>
  </Grid>
);
