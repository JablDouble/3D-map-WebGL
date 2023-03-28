import { Grid } from '@mui/material';
import React, { FC } from 'react';

import {
  SongAlbumImage,
  SpotifyCard,
  SpotifyPlayback,
  TrackInfo,
} from '../../../entities/public-api';
import {
  SpotifyFavoriteButton,
  SpotifyNextTrackButton,
  SpotifyPreviousTrackButton,
  SpotifyQueueListButton,
  SpotifyRepeatTrackButton,
  SpotifySearchButton,
  SpotifyShuffleButton,
  SpotifySoundController,
  SpotifyTogglePlayButton,
  SpotifyTrackRewinder,
  SpotifyVoiceSearchButton,
} from '../../../features/public-api';

interface PlayerProps {
  spotifyPlayback: SpotifyPlayback;
}

const Player: FC<PlayerProps> = ({ spotifyPlayback }) => {
  const {
    playbackState: {
      // eslint-disable-next-line camelcase
      track_window: { current_track },
      duration,
      position,
      paused,
      shuffle,
      repeat_mode: repeatMode,
    },
    player,
  } = spotifyPlayback;

  // eslint-disable-next-line camelcase
  const { album, name: trackName, artists, id: trackId } = current_track;

  return (
    <SpotifyCard>
      <SpotifySearchButton />
      <SpotifyVoiceSearchButton />
      <Grid container direction="column" spacing={1}>
        <Grid item container>
          <Grid item xs={3}>
            <SongAlbumImage src={album.images[0].url} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={11}>
                <TrackInfo trackName={trackName} artists={artists} active />
              </Grid>
              <Grid item xs={1}>
                {trackId && <SpotifyFavoriteButton isLiked trackId={trackId} />}
              </Grid>
            </Grid>
            <SpotifyTrackRewinder
              duration={duration}
              position={position}
              paused={paused}
              player={player}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
            <SpotifyShuffleButton shuffle={shuffle} />
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
            <SpotifyPreviousTrackButton player={player} />
          </Grid>
          <Grid item xs={4} display="flex" alignItems="center" justifyContent="center">
            <SpotifyTogglePlayButton player={player} paused={paused} />
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
            <SpotifyNextTrackButton player={player} />
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
            <SpotifyRepeatTrackButton repeatMode={repeatMode} />
          </Grid>
        </Grid>
        <Grid item container direction="row-reverse" spacing={3}>
          <Grid item xs={4}>
            <SpotifySoundController player={player} />
          </Grid>
          <Grid item xs={1}>
            <SpotifyQueueListButton actionComponent={SpotifyFavoriteButton} />
          </Grid>
        </Grid>
      </Grid>
    </SpotifyCard>
  );
};

export default Player;
