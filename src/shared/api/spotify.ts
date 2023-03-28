import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';

import $api from '../config/axiosInstance';

export default class SpotifyAPI {
  static core = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
  });

  static login(code: string) {
    return $api.post('/sessions/oauth/spotify', {
      code,
    });
  }

  static refresh(refreshToken: string) {
    return $api.post('/sessions/oauth/spotify/refresh', {
      refreshToken,
    });
  }

  static async getCurrentQueue() {
    const spotifyToken = this.core.getAccessToken();
    const { data } = await axios.get(`${process.env.SPOTIFY_API_URL}/me/player/queue`, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    return data;
  }

  static async setTrack(id: string) {
    const spotifyToken = this.core.getAccessToken();
    const { data } = await axios.put(
      `${process.env.SPOTIFY_API_URL}/me/player/play`,
      {
        uris: [id],
      },
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      },
    );
    return data;
  }
}
