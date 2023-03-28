import ShuffleIcon from '@mui/icons-material/Shuffle';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

import { SpotifyAPI } from '../../../shared/public-api';

interface SpotifyShuffleButtonProps {
  shuffle: boolean;
}

const SpotifyShuffleButton: FC<SpotifyShuffleButtonProps> = ({ shuffle }) => {
  const onClickHandler = () => {
    SpotifyAPI.core.setShuffle(!shuffle);
  };

  return (
    <IconButton onClick={onClickHandler}>
      <ShuffleIcon color={shuffle ? 'success' : 'inherit'} sx={{ fontSize: 35 }} />
    </IconButton>
  );
};

export default SpotifyShuffleButton;
