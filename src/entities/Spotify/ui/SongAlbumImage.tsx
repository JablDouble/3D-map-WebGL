import { styled } from '@mui/material';
import React, { FC } from 'react';

import { Image } from '../../../shared/public-api';

interface SongAlbumImageProps {
  src: string;
  height?: number;
  width?: number;
}

const SongImage = styled(Image)(() => ({
  borderRadius: 10,
}));

const SongAlbumImage: FC<SongAlbumImageProps> = ({ src, height = 80, width = 80 }) => {
  return <SongImage src={src} alt="song cover" height={height} width={width} />;
};

export default SongAlbumImage;
