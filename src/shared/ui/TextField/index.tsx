import { InputAdornment, TextField as MUITextField } from '@mui/material';
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

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  defaultValue,
  variant = 'outlined',
  required,
  type = 'text',
  helperText,
  disabled,
  error,
  icon,
  size = 'small',
  fullWidth = false,
}: TextFieldProps): ReactElement => (
  <MUITextField
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
