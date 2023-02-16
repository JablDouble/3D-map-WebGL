import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1c90f5',
    },
    secondary: {
      main: '#767e8a',
    },
    text: {
      primary: '#fefefe',
      secondary: '#737987',
      disabled: '#595959',
    },
    background: {
      paper: '#333645',
      default: '#282a37',
    },
  },
});

export default darkTheme;
