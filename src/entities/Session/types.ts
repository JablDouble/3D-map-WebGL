export interface User {
  name: string;
  surname: string;
  email: string;
  isActivated: boolean;
  activationLink: string;
}

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
