import React, { FC } from 'react';

import { AuthCard } from '../../entities/public-api';
import { SignUpForm } from '../../features/public-api';

interface SignUpPageProps {}

const SignUp: FC<SignUpPageProps> = () => (
  <AuthCard
    subtitle="Start for free"
    title="Create new account"
    secondaryText="Already a member?"
    linkText="Sign In"
    link="/sign-in"
  >
    <SignUpForm />
  </AuthCard>
);

export default SignUp;
