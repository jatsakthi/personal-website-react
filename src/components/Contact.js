import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Box, Typography, TextField, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  outerdiv: {
    background: "#233",
    height: "100vh",
  },
}));
// you can check this in the mui docs
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.outerdiv}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
