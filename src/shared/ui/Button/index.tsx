import { Button as MUIButton } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  endIcon?: ReactElement;
  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  endIcon,
  disabled = false,
}: ButtonProps): ReactElement => (
  <MUIButton
    variant={variant}
    size={size}
    color={color}
    disableElevation
    disabled={disabled}
    endIcon={endIcon}
  >
    {children}
  </MUIButton>
);

export default Button;
