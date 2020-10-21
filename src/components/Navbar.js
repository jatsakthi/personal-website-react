import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar_3 from "../res/my_avatar_3.png";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  Drawer,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import Footer from "../components/Footer";

import { makeStyles } from "@material-ui/core/styles";

// customize the default styles of the material ui
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    position: "static",
  },
  arrowback: {
    color: "tomato",
  },
  appbarTitle: {
    color: "tan",
  },
  menuSliderContaier: {
    background: "#511",
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact",
  },
];
const Navbar = () => {
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => () => {
    setState({
      ...state,
      [slider]: open,
    });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContaier}
      onClick={toggleSlider("right", false)}
    >
      <Avatar className={classes.avatar} src={avatar_3} alt="sakthi" />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.listText}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack className={classes.arrowback} />
            </IconButton>
            <Typography variant="h5" className={classes.appbarTitle}>
              Portfolio
            </Typography>
            {/* anchor is used to control which direction the slider comes in from */}
            <Drawer
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
