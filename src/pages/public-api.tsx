import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import OAuthRedirect from './OAuthRedirect';

const SignUp = lazy(() => import('./SignUp'));
const SignIn = lazy(() => import('./SignIn'));
const AccountVerification = lazy(() => import('./AccountVerification'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/account-verification" element={<AccountVerification />} />
      <Route path="/oauth" element={<OAuthRedirect />} />
      <Route path="*" element={<div>not found page!</div>} />
    </Routes>
  );
};

export default Routing;
