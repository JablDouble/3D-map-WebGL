import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import { SpotifyCard } from '../../../entities/public-api';
import SpotifyWithLabelImg from '../../../shared/assets/img/spotify_with_label.png';
import { Image } from '../../../shared/public-api';
import SpotifyLoginButton from '../SpotifyLoginButton';

const LoginContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '293px',
  textAlign: 'center',
}));

const SpotifyImageWithLabel = styled(Image)(() => ({
  marginBottom: 50,
}));

const LoginWindow: FC<{}> = () => (
  <SpotifyCard>
    <LoginContainer>
      <SpotifyImageWithLabel alt="spotify logo" src={SpotifyWithLabelImg} height={80} width={280} />
      <SpotifyLoginButton fullWidth={false} />
    </LoginContainer>
  </SpotifyCard>
);

export default LoginWindow;
