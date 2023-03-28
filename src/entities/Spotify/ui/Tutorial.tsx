import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

import SpotifyInstructionsImg from '../../../shared/assets/img/spotify_instructions.png';
import { Image } from '../../../shared/public-api';
import { SpotifyCard } from '../../public-api';

const Tutorial: FC<{}> = () => (
  <SpotifyCard>
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
      <Grid item>
        <Image alt="spotify tutorial" src={SpotifyInstructionsImg} height={200} width={200} />
      </Grid>
      <Grid item>
        <Typography variant="h6" color="secondary" pb={1} textAlign="center">
          It&apos;s almost done! Connect our app with your Spotify account. Follow the tutorial.
        </Typography>
      </Grid>
    </Grid>
  </SpotifyCard>
);

export default Tutorial;
