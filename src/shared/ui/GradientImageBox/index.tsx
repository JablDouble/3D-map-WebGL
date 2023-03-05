import { Box, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import convertHexToRGBA from '../../lib/helpers/convertHexToRGBA';

interface GradientImageBoxProps {
  children: ReactNode;
  image: string;
}

interface RootBoxCustomParams {
  image: string;
}

const RootBoxContainer = styled(Box)<RootBoxCustomParams>(({ theme, image }) => {
  const bgColor = theme.palette.background.default;

  return {
    padding: `${theme.spacing(7)} 10%`,
    height: '100vh',
    backgroundImage: `linear-gradient(60deg, ${convertHexToRGBA(bgColor)} 0%, ${convertHexToRGBA(
      bgColor,
    )} 50%, ${convertHexToRGBA(bgColor, 0.85)} 70%, ${convertHexToRGBA(
      bgColor,
      0.4,
    )} 100%), url(${image});`,
    backgroundSize: 'cover',
  };
});

const GradientImageBox: FC<GradientImageBoxProps> = ({ children, image }) => (
  <RootBoxContainer image={image}>{children}</RootBoxContainer>
);

export default GradientImageBox;
