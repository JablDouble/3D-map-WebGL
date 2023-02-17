import { ThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';
import * as Sentry from '@sentry/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/public-api';
import { Header } from '../widgets/public-api';
import './styles/reset.scss';
import { commonTheme, darkTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={deepmerge(commonTheme, darkTheme)}>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<div>not found page!</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default Sentry.withProfiler(App);
