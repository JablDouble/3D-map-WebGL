import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import LogoImg from '../../assets/img/logo.png';
import Image from '../Image';
import style from './style.module.scss';

interface LogoProps {
  hasName?: boolean;
  logoSize?: 'small' | 'medium' | 'big' | 'large';
}

const Logo: FC<LogoProps> = ({ hasName = true, logoSize = 'small' }: LogoProps) => {
  let width: number;
  let height: number;

  switch (logoSize) {
    case 'small':
      width = 25;
      height = 25;
      break;
    case 'medium':
      width = 45;
      height = 45;
      break;
    case 'big':
      width = 65;
      height = 65;
      break;
    case 'large':
      width = 75;
      height = 75;
      break;
    default:
      width = 25;
      height = 25;
      break;
  }

  return (
    <Box className={style.logoContainer}>
      <Image
        src={LogoImg}
        alt="Anywhere App Logo"
        width={width}
        height={height}
        className={style.logoImage}
      />
      {hasName && (
        <Typography ml={1} variant="h6" align="center" component="div" color="textPrimary">
          Anywhere app
          <Typography component="span" variant="h4" color="primary">
            .
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
