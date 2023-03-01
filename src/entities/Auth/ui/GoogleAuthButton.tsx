import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';

import { Button, googleOAuthURL } from '../../../shared/public-api';

interface GoogleAuthButtonProps {
  type: 'signIn' | 'signUp';
  [x: string]: any;
}

export const GoogleAuthButton = ({ type, ...props }: GoogleAuthButtonProps) => (
  <a href={googleOAuthURL}>
    <Button startIcon={<GoogleIcon />} {...props}>
      {type === 'signUp' ? 'Sign up' : 'Sign in'} with Google
    </Button>
  </a>
);
