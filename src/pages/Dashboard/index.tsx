import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';

import { Spotify } from '../../widgets/public-api';

const Dashboard: FC<{}> = () => {
  return (
    <Box mt={7} mx="8%">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Spotify />
        </Grid>
        <Grid item xs={8} container spacing={2} direction="column">
          <Grid item />
          <Grid item container spacing={2} direction="row">
            <Grid item xs={6} />
            <Grid item xs={6} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
