const commonTheme = {
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
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
  },
};

export default commonTheme;
