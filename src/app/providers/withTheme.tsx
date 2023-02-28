import { ThemeProvider } from '@mui/material';
import React, { FunctionComponent } from 'react';

// eslint-disable-next-line boundaries/element-types
import { theme } from '../themes';

const withTheme = (WrappedComponent: FunctionComponent) => (props) => {
  return (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );
};

export default withTheme;
