import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import GlobalErrorBoundary from './shared/lib/errorBoundaries/GlobalErrorBoundary';
import { setupStore } from './store';

process.env.NODE_ENV === 'production' &&
  Sentry.init({
    dsn: 'https://496873ee70434d8a968c17fb701ed272@o4504576249102336.ingest.sentry.io/4504576255197184',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.4,
  });

const rootElement = document.getElementById('root') as HTMLElement;

const store = setupStore();

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);
