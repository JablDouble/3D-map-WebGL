import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { authActions } from '../../entities/public-api';
import { AppLocalStorageAPI, useAppDispatch } from '../../shared/public-api';

const OAuthRedirect = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = params.get('access_token');
    if (accessToken) {
      dispatch(authActions.setIsAuth(true));
      AppLocalStorageAPI.updateAccessToken(accessToken);
      navigate('/dashboard');
    } else {
      navigate('/sign-up?error=true');
    }
  }, [params, navigate, dispatch]);

  return null;
};

export default OAuthRedirect;
