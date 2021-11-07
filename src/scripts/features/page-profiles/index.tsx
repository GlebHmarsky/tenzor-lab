import React from "react"
import { Grid } from "@mui/material"
import Header from "./controls/header"
import ProfilesList from "./controls/body"

const Profiles = () => {
  return (
    <Grid container flexDirection='column' justifyContent='center'>
      <Grid item md={7} xs={11}>
        <Header />
        <ProfilesList/>
      </Grid>
    </Grid>
  )
}

export default Profiles