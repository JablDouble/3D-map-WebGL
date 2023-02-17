import { Typography, styled } from '@mui/material';
import React, { FC } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  textAlign?: 'left' | 'center' | 'right';
  children: string;
}

const NavLinkText = styled(Typography)(() => ({
  fontWeight: 500,
  '&:hover': {
    opacity: 0.8,
  },
}));

const NavLink: FC<LinkProps> = ({ to, textAlign = 'left', children }) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <NavLinkText
          variant="subtitle1"
          align={textAlign}
          color={isActive ? 'textPrimary' : 'textSecondary'}
        >
          {children}
        </NavLinkText>
      )}
    </RouterNavLink>
  );
};

export default NavLink;
