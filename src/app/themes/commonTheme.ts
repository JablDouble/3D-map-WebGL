import { createTheme } from '@mui/material';

const commonTheme = createTheme({
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 8,
});

export default commonTheme;
