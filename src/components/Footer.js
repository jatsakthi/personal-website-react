import React from "react";

import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const social_media = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/jat.sakthi/",
    icon: <Facebook />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/JatSakthi",
    icon: <Twitter />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jatsakthi/",
    icon: <Instagram />,
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      {social_media.map((item) => (
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={item.icon}
          key={item.name}
          component={Link}
          to={{
            pathname: item.link,
          }}
          target="_blank"
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
