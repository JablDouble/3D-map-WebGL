import * as Sentry from '@sentry/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { TextField } from '../shared';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TextField label="test" id="test" icon="kg" />} />
      <Route path="/sign-in" element={<div>Login</div>} />
      <Route path="*" element={<div>Error!</div>} />
    </Routes>
  );
}

export default Sentry.withProfiler(App);
