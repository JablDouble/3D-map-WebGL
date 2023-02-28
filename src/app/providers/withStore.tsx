import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../shared/config/store';

const withStore = (WrappedComponent: FunctionComponent) => (props) =>
  (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );

export default withStore;
