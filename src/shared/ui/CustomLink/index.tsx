import { styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  children: string | ReactNode;
}

const LinkText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  '&:hover': {
    opacity: 0.8,
  },
}));

const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
  return (
    <RouterLink to={to}>
      {typeof children === 'string' ? <LinkText>{children}</LinkText> : children}
    </RouterLink>
  );
};

export default CustomLink;
