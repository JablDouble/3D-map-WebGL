const accessTokenName = 'accessToken';
const spotifyAccessToken = 'spotifyAccessToken';

export default class AppLocalStorageAPI {
  static getAccessToken() {
    return localStorage.getItem(accessTokenName);
  }

  static deleteAccessToken() {
    localStorage.removeItem(accessTokenName);
  }

  static updateAccessToken(value: string) {
    localStorage.setItem(accessTokenName, value);
  }

  static getSpotifyAccessToken() {
    return localStorage.getItem(spotifyAccessToken);
  }

  static updateSpotifyAccessToken(value: string) {
    localStorage.setItem(spotifyAccessToken, value);
  }

  static clearAll() {
    localStorage.clear();
  }
}
