const accessTokenName = 'accessToken';

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
}
