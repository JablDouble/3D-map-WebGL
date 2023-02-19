const commonTheme = {
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: (factor: number | undefined) => (factor ? `${16 * factor}px` : 16),
};

export default commonTheme;
