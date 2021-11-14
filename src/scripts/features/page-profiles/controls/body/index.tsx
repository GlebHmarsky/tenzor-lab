import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { CardTextTypography, ProfileCard } from './styled';

const ProfilesList = ({ profiles }: { profiles: Components.IProfiles[] }) => {
  return (
    <Grid
      container
      flexDirection="row"
      spacing={4}
      justifyContent="center"
      flexWrap="wrap"
    >
      {profiles.map((profile, i) => {
        return (
          <Grid key={i} item xs={12} lg={6}>
            <ProfileCard
              sx={{
                p: 2,
              }}
            >
              <Grid container flexDirection="row" spacing={2} flexWrap="nowrap">
                <Grid item alignItems="center" display="flex">
                  <Card
                    elevation={0}
                    sx={{
                      width: '4rem',
                      height: '4rem',
                      bgcolor: '#eee',
                      p: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1.8rem">
                      {profile.name
                        .split(' ')
                        .map((v) => {
                          return v[0].toUpperCase();
                        })
                        .splice(0, 2)
                        .join('')}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item>
                  <CardTextTypography
                    variant="h6"
                    lineHeight="1.2"
                  >
                    {profile.name}
                  </CardTextTypography>
                  <Typography variant="body2">{profile.description}</Typography>
                </Grid>
              </Grid>
            </ProfileCard>
          </Grid>
        );
      })}
    </Grid >
  );
};

export default ProfilesList;
