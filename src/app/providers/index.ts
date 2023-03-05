import * as Sentry from '@sentry/react';
import compose from 'compose-function';

import { withAuth } from '../../entities/public-api';
import withGlobalErrorBoundary from './withErrorBoundary';
import withRouter from './withRouter';
import withStore from './withStore';
import withTheme from './withTheme';

export const withProviders = compose(
  Sentry.withProfiler,
  withStore,
  withGlobalErrorBoundary,
  withRouter,
  withTheme,
  withAuth,
);
