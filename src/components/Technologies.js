import {
  Card,
  CardContent,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import boot from "../images/boot.png";
import photo from "../images/photo.png";
import figma from "../images/figma.png";
import git from "../images/git.png";
import js from "../images/js.png";
import react from "../images/react.png";
import php from "../images/php.png";
import mysql from "../images/mysql.png";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  Rating,
} from "@material-ui/lab";

const Technologies = () => {
  const skills = [
    {
      year: "2017",
      src: photo,
      title: "Photoshop",
      start: 2.5,
    },
    {
      year: "2020",
      src: figma,
      title: "Figma",
      start: 3,
    },
    {
      year: "2016",
      src: html,
      title: "HTML 5",
      start: 4,
    },
    {
      year: "2016",
      src: css,
      title: "CSS 3",
      start: 4,
    },
    {
      year: "2018",
      src: sass,
      title: "SASS",
      start: 3,
    },
    {
      year: "2018",
      src: boot,
      title: "BOOTSTRAP",
      start: 3.5,
    },
    {
      year: "2018",
      src: js,
      title: "JAVASCRIPT",
      start: 1.5,
    },
    {
      year: "2020",
      src: react,
      title: "REACT",
      start: 1,
    },
    {
      year: "2018",
      src: php,
      title: "PHP",
      start: 2,
    },
    {
      year: "2018",
      src: mysql,
      title: "MYSQL",
      start: 2.5,
    },
    {
      year: "2018",
      src: git,
      title: "GIT",
      start: 3.5,
    },
  ];
  const classes = useStyles();
  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, start }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            {/*<TimelineDot> relleno gris a las imagenes   <TimelineDot>*/}
            <img
              src={src}
              alt="html"
              title={title}
              className={classes.customlogo}
            ></img>
            {/*</TimelineDot>*/}

            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation="5" className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>

              <Rating
                name="read-only"
                defaultValue={start}
                precision={0.5}
                readOnly
              />
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: "center",
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  customlogo: {
    height: "50px",
  },
  paper: {
    maxWidth: "200px",
  },
}));

export default Technologies;
