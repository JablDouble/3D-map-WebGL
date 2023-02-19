import { InputAdornment, TextField as MUITextField, styled } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'password' | 'text' | 'search' | 'email';
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  icon?: ReactNode | string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

const CustomTextField = styled(MUITextField)(({ theme }) => ({
  borderRadius: 15,
  '.MuiFilledInput-root': {
    borderRadius: 15,
    '&:hover:not(.Mui-disabled, .Mui-error):before, &:after, &:before': {
      borderBottom: 'none',
    },
    '&.Mui-focused': {
      border: `2px solid ${theme.palette.primary.main}`,
      boxShadow: `0 0 15px -7px ${theme.palette.primary.main}`,
    },
  },
}));

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  defaultValue,
  variant = 'filled',
  required,
  type = 'text',
  helperText,
  disabled,
  error,
  icon,
  size = 'small',
  fullWidth = false,
}: TextFieldProps): ReactElement => (
  <CustomTextField
    id={id}
    label={label}
    variant={variant}
    defaultValue={defaultValue}
    required={required}
    type={type}
    helperText={helperText}
    disabled={disabled}
    error={error}
    size={size}
    fullWidth={fullWidth}
    InputProps={{
      endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
    }}
  />
);

export default TextField;
