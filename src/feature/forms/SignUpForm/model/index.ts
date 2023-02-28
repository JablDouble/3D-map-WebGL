import { AuthOperation, AuthSignUpDto } from '../../../../entities/public-api';
import { AppDispatch } from '../../../../shared/public-api';

const createNewUser = (signUpData: AuthSignUpDto) => async (dispatch: AppDispatch) => {
  const response = await dispatch(AuthOperation.signUp(signUpData)).unwrap();
  return response;
};

export { createNewUser };
