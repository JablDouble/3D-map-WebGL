import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AppLocalStorageAPI, SpotifyAPI } from '../../../../shared/public-api';

export default function useSpotifyAuth() {
  const [accessToken, setAccessToken] = useState<string | undefined>();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const spotifyAccessToken = searchParams.get('spotify_access_token');
    const spotifyExpiresIn = searchParams.get('expires_in');
    if (spotifyAccessToken && spotifyExpiresIn) {
      window.history.pushState({}, '', '/dashboard');
      AppLocalStorageAPI.updateSpotifyAccessToken(spotifyAccessToken);
      SpotifyAPI.core.setAccessToken(spotifyAccessToken);
    }
  }, [searchParams]);

  useEffect(() => {
    const spotifyAccessToken = AppLocalStorageAPI.getSpotifyAccessToken();
    if (spotifyAccessToken) {
      SpotifyAPI.core.setAccessToken(spotifyAccessToken);
      setAccessToken(spotifyAccessToken);
    } else {
      setAccessToken(undefined);
    }
  }, []);

  return accessToken;
}
