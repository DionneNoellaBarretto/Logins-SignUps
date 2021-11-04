import React from "react";
// npm install @material-ui/core ; npm i @material-ui/icons
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import Avatar from "@mui/material/Avatar"; //https://mui.com/api/avatar/
import LockIcon from "@mui/icons-material/Lock"; //https://mui.com/components/material-icons/#main-content
import Checkbox from "@material-ui/core/Checkbox"; //https://mui.com/components/checkboxes/#main-content
import FormControlLabel from "@material-ui/core/FormControlLabel";
export default function One() {
  const paperStyle = {
    padding: 5,
    height: "35vh", // height / length of the card
    width: 250, //width of the modal
    margin: "10px auto", // aligns the card to the center
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  return (
    <Grid>
      {/* Material UI Login/SignUp - grid is like div in material ui */}
      {/* elevation (material ui property for paper) gives the login a shaded raised look - https://mui.com/components/paper/ paper is another material ui component*/}
      <Paper elevation={20} style={paperStyle}>
        {/* <Grid align='center'> centers the avatar and title to the center */}
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>{" "}
          Login
        </Grid>
        {/* https://mui.com/components/text-fields/#main-content */}
        <TextField
          id="filled-basic"
          label="Username"
          placeholder="Enter a Username"
          variant="filled"
          fullWidth
          required
        />
        {/* type hides the password characters from being shown in plain text form */}
        <TextField
          id="filled-basic"
          label="Password"
          placeholder="Enter a Password"
          type="password"
          variant="filled"
          fullWidth
          required
        />
        {/* remember me check box */}
        <FormControlLabel
          control={<Checkbox color="success" name="checkedB" />}
          label="Remember Me" // text for the check box
        />

        <Typography>
          <Link href="#"> Forgot Password</Link>
        </Typography>

        <Button elevate={20} variant="container" type="submit" color="success" fullwidth>
          SignUp
        </Button>
      </Paper>
    </Grid>
  );
}
