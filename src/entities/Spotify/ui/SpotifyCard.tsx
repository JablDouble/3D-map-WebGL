import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import SpotifyIcon from '../../../shared/assets/img/spotify.png';
import { Image } from '../../../shared/public-api';

interface SpotifyCardProps {
  children: React.ReactNode;
}

const SpotifyContainer = styled(Box)(({ theme }) => ({
  borderRadius: '25px',
  padding: '45px 35px 15px',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  height: '100%',
}));

const SpotifyLogo = styled(Image)(() => ({
  position: 'absolute',
  right: 15,
  top: 15,
}));

const SpotifyCard: FC<SpotifyCardProps> = ({ children }) => {
  return (
    <SpotifyContainer>
      <SpotifyLogo src={SpotifyIcon} alt="Spotify Logo" width={29} height={29} />
      {children}
    </SpotifyContainer>
  );
};

export default SpotifyCard;
