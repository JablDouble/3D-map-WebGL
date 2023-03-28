import { AxiosResponse } from 'axios';

import $api from '../config/axiosInstance';

export default class AuthAPI {
  static signUp(signUpData): Promise<AxiosResponse> {
    return $api.post('/sign-up', {
      ...signUpData,
    });
  }

  static signIn(signInData): Promise<AxiosResponse> {
    return $api.post('/sign-in', {
      ...signInData,
    });
  }

  static signOut() {
    return $api.get('/logout');
  }

  static getInitData(): Promise<AxiosResponse> {
    return $api.get('/self');
  }
}
