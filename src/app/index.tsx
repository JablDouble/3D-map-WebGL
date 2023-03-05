import { CssBaseline } from '@mui/material';
import React from 'react';

import Routing from '../pages/public-api';
import { Header } from '../widgets/public-api';
import { withProviders } from './providers';
import './styles/reset.scss';

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Routing />
  </>
);

export default withProviders(App);
