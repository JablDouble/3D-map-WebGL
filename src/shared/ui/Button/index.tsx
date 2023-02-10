import { Button as MUIButton } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  endIcon?: ReactElement;
  color?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  endIcon,
}: ButtonProps): ReactElement => (
  <MUIButton variant={variant} size={size} color={color} disableElevation endIcon={endIcon}>
    {children}
  </MUIButton>
);

export default Button;
