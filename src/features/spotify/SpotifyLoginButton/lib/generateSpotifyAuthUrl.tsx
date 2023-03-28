const scope = [
  'streaming',
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'user-library-modify',
  'user-read-playback-state',
  'user-modify-playback-state',
].join('%20');

export default `${process.env.SPOTIFY_AUTH_URL}?client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.SPOTIFY_OAUTH_REDIRECT_URL}&response_type=code`;
