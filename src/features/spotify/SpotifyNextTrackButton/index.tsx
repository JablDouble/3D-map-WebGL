import SkipNextIcon from '@mui/icons-material/SkipNext';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

interface SpotifyNextTrackButtonProps {
  player: Spotify.Player;
}

const SpotifyNextTrackButton: FC<SpotifyNextTrackButtonProps> = ({ player }) => {
  const onClickHandler = () => {
    player.nextTrack();
  };

  return (
    <IconButton onClick={onClickHandler}>
      <SkipNextIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
};

export default SpotifyNextTrackButton;
