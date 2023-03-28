import React, { FC } from 'react';

import { Tutorial, useSpotifyAuth, useSpotifyPlayer } from '../../entities/public-api';
import { LoginWindow } from '../../features/public-api';
import Player from './Player';

const Spotify: FC<{}> = () => {
  const spotifyAccessToken = useSpotifyAuth();
  const spotifyPlayback = useSpotifyPlayer(spotifyAccessToken);

  if (!spotifyAccessToken) {
    return <LoginWindow />;
  }

  if (!spotifyPlayback) {
    return <Tutorial />;
  }

  return <Player spotifyPlayback={spotifyPlayback} />;
};

export default Spotify;
