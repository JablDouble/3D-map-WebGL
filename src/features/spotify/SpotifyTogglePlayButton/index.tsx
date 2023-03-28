import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Fab } from '@mui/material';
import React, { FC } from 'react';

interface SpotifyTogglePlayButtonProps {
  player: Spotify.Player;
  paused: boolean;
}

const SpotifyTogglePlayButton: FC<SpotifyTogglePlayButtonProps> = ({ player, paused }) => {
  return (
    <Fab aria-label="edit" color="success" onClick={() => player.togglePlay()}>
      {paused ? <PlayArrowIcon /> : <PauseIcon />}
    </Fab>
  );
};

export default SpotifyTogglePlayButton;
