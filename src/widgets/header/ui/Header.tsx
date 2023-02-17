import { Box, Grid, styled } from '@mui/material';
import * as React from 'react';

import { CustomLink, Logo, NavLink } from '../../../shared/public-api';

interface HeaderProps {}

const HeaderContainer = styled(Box)(() => ({
  position: 'fixed',
  width: '100%',
}));

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer px="5%" py={3}>
      <Grid container>
        <Grid
          xs={12}
          md={9}
          lg={6}
          item
          container
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid xs={6} sm={4} item>
            <CustomLink to="/">
              <Logo />
            </CustomLink>
          </Grid>
          <Grid xs={3} sm={4} item>
            <NavLink to="/" textAlign="center">
              Home
            </NavLink>
          </Grid>
          <Grid xs={3} sm={4} item>
            <NavLink to="/sign-in" textAlign="center">
              Join
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
