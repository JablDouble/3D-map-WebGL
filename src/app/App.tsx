import { CssBaseline } from '@mui/material';
import * as Sentry from '@sentry/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignUp } from '../pages/public-api';
import { Header } from '../widgets/public-api';
// eslint-disable-next-line import/no-internal-modules
import withTheme from './providers/withTheme';
import './styles/reset.scss';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<div>not found page!</div>} />
      </Routes>
    </>
  );
}

export default Sentry.withProfiler(withTheme(App));
