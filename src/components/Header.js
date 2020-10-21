import React from "react";
import avatar_2 from "../res/my_avatar_2.png";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// gives the typewriter effect
import Typed from "react-typed";

// customize the default styles of the material ui
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    // this helps bring the whole box back to center
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    // Don't know why
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer} component="div">
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar_2}
          alt="Sakthi Vel"
        ></Avatar>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Sakthi Vel"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Software Developer",
            "South Indian (Tamizhian)",
            "Beginner Skier",
            "Knows just A D E of Guitar",
            "Sucker for Home Food",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
