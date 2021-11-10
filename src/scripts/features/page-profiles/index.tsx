import React from 'react';
import { Grid } from '@mui/material';
import Header from './controls/header';
import ProfilesList from './controls/body';

const Profiles = () => {
  return (
    <Grid container flexDirection="column" alignContent="center">
      <Grid item sm={7} xs={11}>
        <Grid container>
          <Header />
          <ProfilesList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profiles;
