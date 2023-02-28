import { User } from '../public-api';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthSignUpDto {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface AuthSignInDto {
  email: string;
  password: string;
}
