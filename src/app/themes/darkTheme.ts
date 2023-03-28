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
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          background: '#282a37',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: 'fit-content',
          backgroundImage: 'none',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#282a37 #333645',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#333645',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#282a37',
            minHeight: 24,
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#333645',
          },
        },
      },
    },
  },
});

export default darkTheme;
