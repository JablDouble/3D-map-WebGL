import { useEffect, useState } from 'react';

import { SpotifyPlayback } from '../../types';

const useSpotifyPlayer = (token?: string) => {
  const [playerInstance, setPlayer] = useState<Spotify.Player | null>(null);
  const [isActive, setActive] = useState(false);
  const [playbackState, setPlaybackState] = useState<Spotify.PlaybackState | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    if (document.querySelector('script[src="https://sdk.scdn.co/spotify-player.js"]') !== null) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Anywhere App',
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return;
        }

        setPlaybackState(state);
        player?.getCurrentState().then((currentState) => {
          !currentState ? setActive(false) : setActive(true);
        });
      });

      setPlayer(player);
      player.connect();
    };
  }, [token]);

  if (!isActive || !playerInstance || !playbackState) {
    return;
  }

  return { player: playerInstance, playbackState } as SpotifyPlayback;
};

export default useSpotifyPlayer;
