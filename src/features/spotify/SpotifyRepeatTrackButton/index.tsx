import LoopIcon from '@mui/icons-material/Loop';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

import { SpotifyAPI } from '../../../shared/public-api';

interface SpotifyRepeatTrackButtonProps {
  repeatMode: number;
}

const SpotifyRepeatTrackButton: FC<SpotifyRepeatTrackButtonProps> = ({ repeatMode }) => {
  const setRepeatTrack = (currentState: number) => {
    switch (currentState) {
      case 0:
        return 'context';
      case 1:
        return 'track';
      case 2:
        return 'off';
      default:
        return 'off';
    }
  };

  const onClickHandler = async () => {
    const modeStatus = setRepeatTrack(repeatMode);
    SpotifyAPI.core.setRepeat(modeStatus);
  };

  return (
    <IconButton onClick={onClickHandler}>
      <LoopIcon color={repeatMode === 2 ? 'success' : 'inherit'} sx={{ fontSize: 35 }} />
    </IconButton>
  );
};

export default SpotifyRepeatTrackButton;
