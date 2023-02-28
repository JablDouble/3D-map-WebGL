import { CircularProgress, Button as MUIButton, styled } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

import { PaletteColor } from '../../public-api';

interface ButtonProps {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  endIcon?: ReactElement;
  color?: PaletteColor;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  isLoading?: boolean;
}

interface CustomButtonProps {
  color: PaletteColor;
  theme: any;
}

const CustomButton = styled(MUIButton)(({ theme, color }: CustomButtonProps) => ({
  borderRadius: '25px',
  padding: 15,
  boxShadow: color !== 'secondary' ? `0 12px 35px -22px ${theme.palette[color].main}` : undefined,
}));

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  endIcon,
  disabled = false,
  fullWidth = true,
  type,
  tabIndex,
  isLoading,
}: ButtonProps): ReactElement => (
  <CustomButton
    variant={variant}
    size={size}
    color={color}
    disableElevation
    disabled={disabled || isLoading}
    endIcon={endIcon || (isLoading && <CircularProgress size={12} />)}
    fullWidth={fullWidth}
    type={type}
    tabIndex={tabIndex}
  >
    {children}
  </CustomButton>
);

export default Button;
