import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';

interface SignInPageProps {}

const SignIn: FC<SignInPageProps> = () => (
  <Container maxWidth="lg">
    <Typography variant="subtitle1">Sign In works</Typography>
  </Container>
);

export default SignIn;
