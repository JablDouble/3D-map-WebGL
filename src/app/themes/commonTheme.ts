const commonTheme = {
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    success: {
      main: '#18d860',
    },
  },
  spacing: (factor: number | undefined) => (factor ? `${16 * factor}px` : 16),
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 4,
        },
        thumb: {
          width: 8,
          height: 8,
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 16%)'}`,
          },
          '&.Mui-active': {
            width: 20,
            height: 20,
          },
        },
        rail: {
          opacity: 0.28,
        },
      },
    },
  },
};

export default commonTheme;
