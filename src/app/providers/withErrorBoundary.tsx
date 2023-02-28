import React, { FunctionComponent } from 'react';

import { GlobalErrorBoundary } from '../../shared/public-api';

const withGlobalErrorBoundary = (WrappedComponent: FunctionComponent) => (props) =>
  (
    <GlobalErrorBoundary>
      <WrappedComponent {...props} />
    </GlobalErrorBoundary>
  );

export default withGlobalErrorBoundary;
