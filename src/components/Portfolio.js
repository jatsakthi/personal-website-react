import React, { Fragment } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import project1 from "../res/hbase.png";
import GitPng from "../res/git.png";
import { makeStyles } from "@material-ui/core/styles";

// customize the default styles of the material ui
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    width: 345,
    // // (top,bottom), (auto)
    margin: "5rem auto",
  },
}));

function PortfolioButton(props) {
  return (
    <Button
      size="small"
      color="primary"
      component={Link}
      to={{
        pathname: props.path,
      }}
      target="_blank"
    >
      {props.label}
    </Button>
  );
}

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    PMC & Committer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Apache HBase is an open-source, distributed, versioned,
                    column-oriented store modeled after Google' Bigtable.
                  </Typography>
                </CardContent>
                <CardActions>
                  <PortfolioButton
                    path="https://github.com/apache/hbase/commits?author=jatsakthi"
                    label="See Commits"
                  />
                  <PortfolioButton
                    path="https://hbase.apache.org/"
                    label="Visit HBase"
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140"
                  image={GitPng}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Foodie Friend
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An automatic scaling Python app that translates menu cards
                    into English, displays pictures &amp; ingredients of dishes
                    and suggests must-try local foods using Google App Engine’s
                    Pub/Sub, Compute Engine, Google APIs &amp; BigQuery.
                  </Typography>
                </CardContent>
                <CardActions>
                  <PortfolioButton
                    path="https://github.com/jatsakthi/University-Coursework/tree/master/Cloud-Computing/Foodie%20Friend"
                    label="See Code"
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140"
                  image={GitPng}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Hot Spot Analysis
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Identification of top 50 statistically significant hot spots
                    in Yellow Cab trip data of 1.8 GB by implementing Java
                    Map-Reduce programs in Hadoop &amp; Spark in a team of 5
                    which led to 100% accuracy in 2.5 seconds.
                  </Typography>
                </CardContent>
                <CardActions>
                  <PortfolioButton
                    path="https://github.com/jatsakthi/University-Coursework/tree/master/Distributed-Data-Management/Hot%20Spot%20Analysis"
                    label="See Code"
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140"
                  image={GitPng}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Spatial Join Query
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Optimization for quicker join operation of join conditions
                    having two predicates with inequality operators.
                  </Typography>
                </CardContent>
                <CardActions>
                  <PortfolioButton
                    path="https://github.com/jatsakthi/University-Coursework/tree/master/Distributed-Data-Management/Spatial%20Join%20Query"
                    label="See Code"
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Portfolio;
