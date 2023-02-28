import { AxiosResponse } from 'axios';

import { AuthResponse, AuthSignInDto, AuthSignUpDto } from '../../entities/public-api';
import $api from '../config/axiosInstance';

export default class AuthAPI {
  static signUp(signUpData: AuthSignUpDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-up', {
      ...signUpData,
    });
  }

  static signIn(signInData: AuthSignInDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-in', {
      ...signInData,
    });
  }

  static logout() {
    return $api.post('/logout');
  }
}
