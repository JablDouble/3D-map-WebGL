import { Box, Grid, styled } from '@mui/material';
import React, { FC } from 'react';

import { SpotifyAPI, convertMsToTimeFormat } from '../../../shared/public-api';
import { Queue, SongAlbumImage, TrackInfo } from '../../public-api';

interface QueueSongCardProps {
  track: Queue;
  renderAction: (isLiked: boolean) => React.ReactElement;
}

const SongCard = styled(Box)(() => ({
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '20px',
  ':hover': {
    background: '#282a37',
  },
}));

const QueueSongCard: FC<QueueSongCardProps> = ({ track, renderAction }) => {
  return (
    <SongCard onClick={() => SpotifyAPI.setTrack(track.uri)}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <SongAlbumImage src={track.album.images[0].url} width={60} height={60} />
        </Grid>
        <Grid item xs={8}>
          <TrackInfo trackName={track.name} artists={track.artists} />
        </Grid>
        <Grid item xs={1}>
          {renderAction(track.explicit)}
        </Grid>
        <Grid item xs={1}>
          {convertMsToTimeFormat(track.duration_ms)}
        </Grid>
      </Grid>
    </SongCard>
  );
};

export default QueueSongCard;
