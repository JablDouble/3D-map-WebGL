import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, IconButton, Slider, styled } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

const SoundBlock = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
}));

interface SpotifySoundControllerProps {
  player: Spotify.Player;
}

const SpotifySoundController: FC<SpotifySoundControllerProps> = ({ player }) => {
  const [isEnabled, setEnabled] = useState(true);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    (async () => {
      await player.setVolume(volume / 100);
      if (!volume) {
        setEnabled(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  const onSoundIconClickHandler = () => {
    setVolume(isEnabled ? 0 : 50);
    setEnabled(!isEnabled);
  };

  return (
    <SoundBlock>
      <IconButton onClick={onSoundIconClickHandler}>
        {isEnabled ? (
          <VolumeUpIcon color="secondary" fontSize="large" />
        ) : (
          <VolumeOffIcon color="secondary" fontSize="large" />
        )}
      </IconButton>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={volume}
        onChange={(_, value) => setVolume(value as number)}
      />
    </SoundBlock>
  );
};

export default SpotifySoundController;
