import { Box } from '@mui/material';
import React, { FC } from 'react';

interface ImageProps {
  src: string;
  height: number | string;
  width: number | string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, width, height, alt }: ImageProps) => (
  <Box
    component="img"
    sx={{
      height,
      width,
    }}
    alt={alt}
    src={src}
  />
);

export default Image;
