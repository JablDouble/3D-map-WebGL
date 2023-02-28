import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { AuthCard, authSelectors } from '../../entities/public-api';

interface AccountVerificationProps {}

const AccountVerification: FC<AccountVerificationProps> = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <AuthCard subtitle="It's almost done" title="Verify your account">
      <Typography variant="h5" color="secondary" mt={2}>
        We are glad to see you on our service. An account confirmation message has been sent to your{' '}
        {userEmail ? (
          <>
            email{' '}
            <Typography variant="h5" component="span" color="primary">
              {userEmail}
            </Typography>
          </>
        ) : (
          'email'
        )}
        . Follow the instructions in the email message to sign in.
      </Typography>
    </AuthCard>
  );
};

export default AccountVerification;
