import { styled } from '@mui/material';
import React, { FC } from 'react';

import { Button } from '../../../shared/public-api';
import generateSpotifyAuthUrl from './lib/generateSpotifyAuthUrl';

interface SpotifyLoginButtonProps {
  fullWidth?: boolean;
}

const SpotifyRedirectLink = styled('a')(() => ({
  width: 'inherit',
}));

const SpotifyLoginButton: FC<SpotifyLoginButtonProps> = ({ fullWidth = false }) => (
  <SpotifyRedirectLink href={generateSpotifyAuthUrl}>
    <Button color="success" fullWidth={fullWidth}>
      Login With Spotify
    </Button>
  </SpotifyRedirectLink>
);

export default SpotifyLoginButton;
