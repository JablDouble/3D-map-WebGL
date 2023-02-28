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
    error: {
      main: '#e1665d',
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

  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&&:hover::before': {
            borderColor: 'red',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: '#333645',
        },
      },
    },
  },
});

export default darkTheme;
