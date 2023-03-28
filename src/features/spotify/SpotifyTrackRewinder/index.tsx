import { Box, Slider, Typography, styled } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { convertMsToTimeFormat } from '../../../shared/public-api';

const TimeBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mt: -1,
}));

interface SpotifyTrackSliderProps {
  duration: number;
  position: number;
  paused: boolean;
  player: Spotify.Player;
}

const SpotifyTrackRewinder: FC<SpotifyTrackSliderProps> = ({
  duration,
  position,
  paused,
  player,
}) => {
  const [currentCalcutedPosition, setCurrentCalcutedPosition] = useState<number>(position);

  useEffect(() => {
    let intervalId;
    if (!paused) {
      intervalId = setInterval(() => {
        setCurrentCalcutedPosition((prevPosition: number) => prevPosition + 100);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [paused]);

  useEffect(() => {
    setCurrentCalcutedPosition(position);
  }, [position]);

  const calculateTrackProgress = (currentTime: number, trackDuration: number): number => {
    return (currentTime / trackDuration) * 100;
  };

  const getMillisecondsOfTrack = (percent: number, trackDuration: number): number => {
    if (percent < 0 || percent > 100) {
      throw new Error('Invalid percentage value: must be between 0 and 100');
    }

    const millisecondsAtPercentage = (percent * trackDuration) / 100;
    return millisecondsAtPercentage;
  };

  const onChangeSliderHandler = (_e, value) => {
    const updatedTime = getMillisecondsOfTrack(value as number, duration);

    player.seek(updatedTime);
  };

  return (
    <>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={calculateTrackProgress(currentCalcutedPosition, duration)}
        onChange={onChangeSliderHandler}
      />
      <TimeBox>
        <Typography variant="body2" component="span" color="secondary">
          {convertMsToTimeFormat(currentCalcutedPosition)}
        </Typography>
        <Typography variant="body2" component="span" color="secondary">
          {convertMsToTimeFormat(duration - currentCalcutedPosition)}
        </Typography>
      </TimeBox>
    </>
  );
};

export default SpotifyTrackRewinder;
