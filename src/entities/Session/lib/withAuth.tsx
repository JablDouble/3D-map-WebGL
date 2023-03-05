import { LinearProgress } from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { AppLocalStorageAPI, useAppDispatch } from '../../../shared/public-api';
import AuthService from './authService';

const withAuth = (WrappedComponent: FunctionComponent) => () => {
  const dispatch = useAppDispatch();
  const [isInitingApp, setIsInitingApp] = useState(true);

  useEffect(() => {
    (async () => {
      const token = AppLocalStorageAPI.getAccessToken();
      if (token) {
        try {
          const user = await dispatch(AuthService.initProccessWhenStart());
          if (!user) {
            throw new Error();
          }
        } catch {
          dispatch(AuthService.signOut());
          setIsInitingApp(false);
        }
      }
      setIsInitingApp(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isInitingApp) {
    return <LinearProgress />;
  }

  return <WrappedComponent />;
};

export default withAuth;
