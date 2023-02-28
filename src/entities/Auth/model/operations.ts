import { AuthAPI, createSafeAsyncThunk } from '../../../shared/public-api';
import { AuthSignInDto, AuthSignUpDto } from '../types';

export class AuthOperation {
  static signUp = createSafeAsyncThunk('auth/signUp', async (signUpData: AuthSignUpDto) => {
    const response = await AuthAPI.signUp(signUpData);
    return response.data;
  });

  static signIn = createSafeAsyncThunk('auth/signIn', async (signInData: AuthSignInDto) => {
    const response = await AuthAPI.signIn(signInData);
    return response.data;
  });
}
