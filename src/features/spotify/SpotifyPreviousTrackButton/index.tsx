import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

interface SpotifyPreviousTrackButtonProps {
  player: Spotify.Player;
}

const SpotifyPreviousTrackButton: FC<SpotifyPreviousTrackButtonProps> = ({ player }) => {
  const onClickHandler = () => {
    player.previousTrack();
  };

  return (
    <IconButton onClick={onClickHandler}>
      <SkipPreviousIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
};

export default SpotifyPreviousTrackButton;
