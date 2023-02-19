import { Grid } from '@mui/material';
import React, { FC } from 'react';

import BackgroundImg from '../shared/assets/img/bg.jpg';
import { GradientImageBox } from '../shared/public-api';
import { SignUpPanel } from '../widgets/public-api';

interface SignUpPageProps {}

const SignUp: FC<SignUpPageProps> = () => (
  <GradientImageBox image={BackgroundImg}>
    <Grid alignItems="center" container sx={{ height: '100%' }}>
      <Grid xs={6} item>
        <SignUpPanel />
      </Grid>
    </Grid>
  </GradientImageBox>
);

export default SignUp;
