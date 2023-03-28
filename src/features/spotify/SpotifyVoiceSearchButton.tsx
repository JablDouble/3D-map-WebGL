import MicIcon from '@mui/icons-material/Mic';
import { IconButton, styled } from '@mui/material';
import React, { FC } from 'react';

const SearchMicIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 105,
  top: 15,
  fontSize: 30,
  cursor: 'pointer',
}));

interface SpotifyVoiceSearchButtonProps {}

const SpotifyVoiceSearchButton: FC<SpotifyVoiceSearchButtonProps> = () => {
  return (
    <SearchMicIconButton>
      <MicIcon color="secondary" />
    </SearchMicIconButton>
  );
};

export default SpotifyVoiceSearchButton;
