import { Typography, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  textAlign?: 'left' | 'center' | 'right';
  children: string | ReactNode;
}

const LinkText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  '&:hover': {
    opacity: 0.8,
  },
}));

const CustomLink: FC<CustomLinkProps> = ({ to, textAlign = 'left', children }) => {
  return (
    <RouterLink to={to}>
      {typeof children === 'string' ? (
        <LinkText variant="subtitle1" align={textAlign}>
          {children}
        </LinkText>
      ) : (
        children
      )}
    </RouterLink>
  );
};

export default CustomLink;
