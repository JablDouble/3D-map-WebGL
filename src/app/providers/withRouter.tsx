import { LinearProgress } from '@mui/material';
import React, { FunctionComponent, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (WrappedComponent: FunctionComponent) => (props) =>
  (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <WrappedComponent {...props} />
      </Suspense>
    </BrowserRouter>
  );

export default withRouter;
