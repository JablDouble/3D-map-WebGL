import { Typography, styled } from '@mui/material';
import React, { FC } from 'react';

interface SpotifyShuffleButtonProps {
  trackName: string;
  artists: Spotify.Entity[];
  active?: boolean;
}

interface TrackSubtitleProps {
  active: boolean;
}

const TrackSubtitle = styled(Typography)<TrackSubtitleProps>(({ active, theme }) => ({
  color: active ? theme.palette.success.main : theme.palette.text.primary,
  fontWeight: 600,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
}));

const SpotifyShuffleButton: FC<SpotifyShuffleButtonProps> = ({ trackName, artists, active }) => {
  const formatPerformers = (performers: Spotify.Entity[]): string => {
    const performerNames = performers.reduce((acc, currentArtist) => {
      return [...acc, currentArtist.name];
    }, [] as string[]);
    return performerNames.join(', ');
  };

  return (
    <>
      <TrackSubtitle active={active || false} variant="subtitle1">
        {trackName}
      </TrackSubtitle>
      <Typography variant="subtitle2" color="secondary">
        {formatPerformers(artists)}
      </Typography>
    </>
  );
};

export default SpotifyShuffleButton;
