import { push } from 'react-router-redux';

import { AppLocalStorageAPI } from '../../../shared/public-api';
import { AuthOperation } from '../model/operations';
import { AuthSignInDto, AuthSignUpDto } from '../types';

export default class AuthService {
  static initProccessWhenStart = () => async (dispatch: AppDispatch) => {
    const user = await dispatch(AuthOperation.getInitData()).unwrap();
    return user;
  };

  static createNewUser = (signUpData: AuthSignUpDto) => async (dispatch: AppDispatch) => {
    const response = await dispatch(AuthOperation.signUp(signUpData)).unwrap();
    return response;
  };

  static signIn = (signInData: AuthSignInDto) => async (dispatch: AppDispatch) => {
    const response = await dispatch(AuthOperation.signIn(signInData)).unwrap();
    const { accessToken } = response;
    AppLocalStorageAPI.updateAccessToken(accessToken);
    return response;
  };

  static signOut = () => (dispatch: AppDispatch) => {
    AppLocalStorageAPI.clearAll();
    dispatch(AuthOperation.signOut()).unwrap();
    dispatch(push('/sign-in'));
  };
}
