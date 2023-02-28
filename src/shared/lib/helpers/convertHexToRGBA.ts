const convertHexToRGBA = (hex: string, alpha?: number) => {
  let modifedHex = hex.replace('#', '');
  if (modifedHex.length === 3) {
    modifedHex =
      modifedHex[0] + modifedHex[0] + modifedHex[1] + modifedHex[1] + modifedHex[2] + modifedHex[2];
  }
  const r = parseInt(modifedHex.slice(0, 2), 16);
  const g = parseInt(modifedHex.slice(2, 4), 16);
  const b = parseInt(modifedHex.slice(4, 6), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

export default convertHexToRGBA;
