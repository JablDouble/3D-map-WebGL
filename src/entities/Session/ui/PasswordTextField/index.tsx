import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import React, { FC, useState } from 'react';

import { TextField } from '../../../../shared/public-api';

interface PasswordTextFieldProps {
  id: string;
  label: string;
  [x: string]: any;
}

const PasswordTextField: FC<PasswordTextFieldProps> = ({
  id,
  label,
  ...props
}: PasswordTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...props}
      id={id}
      label={label}
      type={showPassword ? 'text' : 'password'}
      icon={
        <IconButton
          data-testid="toggle-password-visibility"
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <VisibilityOff color="secondary" /> : <Visibility color="secondary" />}
        </IconButton>
      }
    />
  );
};

export default PasswordTextField;
