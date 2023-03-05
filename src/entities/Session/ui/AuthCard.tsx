import { Grid, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import BackgroundImg from '../../../shared/assets/img/bg.jpg';
import { CustomLink, GradientImageBox } from '../../../shared/public-api';

interface AuthCardProps {
  subtitle: string;
  title: string;
  link?: string;
  linkText?: string;
  secondaryText?: string;
  children: ReactNode;
}

const AuthCard: FC<AuthCardProps> = ({
  children,
  subtitle,
  title,
  link,
  linkText,
  secondaryText,
}) => (
  <GradientImageBox image={BackgroundImg}>
    <Grid alignItems="center" container sx={{ height: '100%' }}>
      <Grid xs={6} item>
        <Typography variant="h6" color="textSecondary" mb={1}>
          {subtitle.toUpperCase()}
        </Typography>
        <Typography variant="h2" mb={1}>
          {title}
          <Typography component="span" variant="h3" color="primary">
            .
          </Typography>
        </Typography>
        {link && (
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }} color="textSecondary" mb={2}>
            {secondaryText} <CustomLink to={link}>{linkText}</CustomLink>
          </Typography>
        )}
        {children && (
          <Grid container>
            <Grid item xs={8}>
              {children}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  </GradientImageBox>
);

export default AuthCard;
