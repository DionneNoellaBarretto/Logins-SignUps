import React from "react";
// npm install @material-ui/core ; npm i @material-ui/icons
import { Grid, Paper } from "@material-ui/core";

export default function One() {
  return (
    <div>
      <h5> Material UI based Login / Sign Up Page </h5>
      {/* grid is like div in material ui */}
      <Grid>
      {/* elevation (material ui property for paper) gives the login a shaded raised look - https://mui.com/components/paper/ paper is another material ui component*/}
        <Paper elevation={20}> Login</Paper>
      </Grid>
    </div>
  );
}
