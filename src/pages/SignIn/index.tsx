import React, { FC } from 'react';

import { AuthCard } from '../../entities/public-api';
import { SignInForm } from '../../features/public-api';

interface SignInPageProps {}

const SignIn: FC<SignInPageProps> = () => (
  <AuthCard
    subtitle="Use for free"
    title="Sign in to account"
    secondaryText="Don't have an account?"
    linkText="Sign Up"
    link="/sign-up"
  >
    <SignInForm />
  </AuthCard>
);

export default SignIn;
