import { AuthOperation, AuthSignInDto } from '../../../../entities/public-api';
import { AppDispatch, AppLocalStorageAPI } from '../../../../shared/public-api';

const signIn = (signInData: AuthSignInDto) => async (dispatch: AppDispatch) => {
  const response = await dispatch(AuthOperation.signIn(signInData)).unwrap();
  const { accessToken } = response;
  AppLocalStorageAPI.updateAccessToken(accessToken);
  return response;
};

export { signIn };
