import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAppSelector from '../../../shared/lib/hooks/useAppSelector';
import { authSelectors } from '../model';

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute = ({ redirectPath = 'sign-in' }: PrivateRouteProps) => {
  const isAuth = useAppSelector(authSelectors.getIsAuth);

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
