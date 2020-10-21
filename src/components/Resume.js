import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
// customize the default styles of the material ui
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "2rem",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    //     // greater than md size screen
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    // top,right,bottom,left
    margin: "1rem 3rem 2rem auto",
    clear: "both",
    // "&:after": {
    //   content: "'here'",
    //   position: "absolute",
    // },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-1.2rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        transform: "rotate(-135deg)",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "18rem",
    // top,right,bottom,left
    // margin: "1rem 3rem 2rem 4rem",
    margin: "1rem 3rem 1rem auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    // (top,bottom) (right,left)
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
  techUsed: {
    fontStyle: "italic",
    color: "grey",
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Feb 2018 - Current
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Senior Software Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Cloudera, Inc. (Palo Alto, USA)
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.techUsed}
            >
              Technologies Used: Python, Hadoop, Map-Reduce, Spark, MongoDB,
              PostgreSQL, PyCharm, AWS, Linux
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Developing as part of the HBase team (7 members) to contribute to
              the Open Source Apache HBase. HBase is a distributed, scalable,
              big data store based on Hadoop as filesystem & Zookeeper as
              coordination service. Attained the position of Apache HBase
              Committer and PMC within a span of less than 2 years. Worked on
              building and releasing a version of HBase with Java 11 support.
              Worked on Space Quotas Management feature in HBase and fixed
              several bugs in the feature. Worked on the Meta-Metrics feature in
              HBase and thoroughly tested and added test cases to validate.
              Handle HBase releases upstream and backports of issues to CDH.
              Worked as a “gatekeeper” for CDH 5.16 version which went GA
              recently. Building bash scripts and modifying test suites for Java
              programs using JUnit framework to increase code coverage
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            May 2017 - Nov 2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Software Intern
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              CYR3CON (Phoenix, USA)
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.techUsed}
            >
              Technologies Used: Python, Hadoop, Map-Reduce, Spark, MongoDB,
              PostgreSQL, PyCharm, AWS, Linux
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Delivered results for 40% improvement in data access speed by
              migrating infrastructure from Postgres to MongoDB. Re-designed
              MongoDB schema by reducing collection & field counts leading to 5%
              quicker response to REST API endpoints. Involved in incremental
              development with cross-functional teams & deployment to production
              environment using Git repos. Decreased Postgres data transfer time
              from 40 mins to 7.5 mins through Spark and multithreaded Python
              implementations. Initiated the decision to use Mongo-Engine as
              object data mapper which now handles 50 GB of data on daily basis
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Jul 2015 - Dec 2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Infoview Technologies Pvt Limited, (Chennai, India)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Reduced SLOC by 1.5k lines by improving object-oriented designs of
              Java Spring MVC controllers and business logic layers.Adopted
              AGILE Scrum & TDD methodologies to cut short development costs and
              delivery time by about 15%.Utilized Java/J2EE Technologies such as
              Core Java, JDBC, Servlets, JSP, XML, SPRING, JUnit, JavaScript,
              and Hibernate for development of Restful Web services.Developed
              SOAP/REST based APIs using JAX-WS, JAX-RS for logging 0.5 GB of
              error messages per day to internal GUI.Involved in handling the
              presentation, business logics and data management layers of
              enterprise applications.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resume;
