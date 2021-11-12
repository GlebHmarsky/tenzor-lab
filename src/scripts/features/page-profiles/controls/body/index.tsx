import { Card, Grid, Typography } from '@mui/material';
import React from 'react';

const cards: {
  name: string;
  descrition?: string;
  imgLink?: string;
}[] = [
    {
      name: 'Иванов Иван',
      descrition: 'Учусь в школе',
    },
    {
      name: 'Лариска',
      descrition: 'Преподаю в универе',
    },
    {
      name: 'Иванов Иван',
      descrition: 'Учусь в школе',
    },
    {
      name: 'Лариска',
      descrition: 'Преподаю в универе',
    },
    {
      name: 'Иванов Иван',
      descrition: 'Учусь в школе',
    },
    {
      name: 'Лариска',
      descrition: 'Преподаю в универе',
    },
    {
      name: 'Иванов Иван',
      descrition: 'Учусь в школе',
    },
    {
      name: 'Лариска',
      descrition: 'Преподаю в универе',
    },
    {
      name: 'Иванов Иван',
      descrition: 'Учусь в школе',
    },
    {
      name: 'Лариска',
      descrition: 'Преподаю в универе',
    },
  ];

const ProfilesList = () => {
  return (
    <Grid
      container
      flexDirection="row"
      spacing={4}
      justifyContent="center"
      flexWrap="wrap"
    >
      {cards.map((card, i) => {
        return (
          <Grid key={i} item xs={12} lg={6}>
            <Card>
              <Grid container flexDirection="row">
                <Grid item xs={3} alignItems="center" display="flex">
                  <Card
                    elevation={0}
                    sx={{
                      width: '4rem',
                      height: '4rem',
                      bgcolor:'#eee',
                      p: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      
                    }}
                    

                  >
                    <Typography variant='subtitle1' fontSize='2.2rem'>
                      {card.name
                        .split(' ')
                        .map((v) => {
                          return v[0].toUpperCase();
                        })
                        .splice(2)
                        .join('')}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={9}>
                  <Typography
                    variant="h6"
                    lineHeight='1.2'
                    sx={{
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography variant="body2">{card.descrition}</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid >
        );
      })}
    </Grid >
  );
};

export default ProfilesList;
