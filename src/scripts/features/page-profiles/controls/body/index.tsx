import { Card, Grid, Typography } from "@mui/material"
import React from "react"

const cards: {
  name: string,
  descrition?: string,
  imgLink?: string,
}[] = [
    {
      name: "Иванов Иван",
      descrition: "Учусь в школе",
    },
    {
      name: "Лариска",
      descrition: "Преподаю в универе",
    },
  ]

const ProfilesList = () => {
  return (
    <Grid container flexDirection="row" spacing={4} justifyContent='center' flexWrap="wrap">
      {cards.map((card, i) => {
        return (
          <Grid key={i} item md={6} xs={12}>
            <Card>
              <Typography variant="subtitle1" >
                {card.name}
                {card.descrition}
              </Typography>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProfilesList