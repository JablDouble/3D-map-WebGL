const googleRoot = process.env.GOOGLE_OAUTH_ROOT;

const option = {
  redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
  client_id: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
  access_type: 'offline',
  response_type: 'code',
  prompt: 'consent',
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ].join(' '),
};

const queries = new URLSearchParams(option);

const googleOAuthURL = `${googleRoot}?${queries.toString()}`;

export default googleOAuthURL;
