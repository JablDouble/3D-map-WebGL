import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AppLocalStorageAPI } from '../../shared/public-api';

const OAuthRedirect = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const accessToken = params.get('access_token');
    if (accessToken) {
      AppLocalStorageAPI.updateAccessToken(accessToken);
      navigate('/home');
    } else {
      navigate('/sign-up?error=true');
    }
  }, [params, navigate]);

  return null;
};

export default OAuthRedirect;
