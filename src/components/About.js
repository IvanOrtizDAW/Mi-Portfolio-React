import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import yo from "../images/foto.PNG";
import TypeWriterEffect from "react-typewriter-effect";
import pdfcv from "../images/Iván_Ortiz.pdf";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3" className={classes.h3}>
          {title}
        </Typography>
        <Card className={classes.card}>
          <CardMedia image={yo} className={classes.media} title="foto" />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Hola, soy Iván Ortiz"
              textStyle={{
                FontSize: "1.2rem",
                fontWeight: "400px",
                color: "red",
              }}
              startDelay={100}
              cursorColour="red"
              typeSpedd={100}
            />
            <TypeWriterEffect
              text="y soy desarrollador web"
              textStyle={{
                FontSize: "0.1rem",
                fontWeight: "1000px",
                color: "black",
              }}
              startDelay={3000}
              cursorColour="red"
              typeSpedd={60}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={pdfcv} download>
                Descargar CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "80vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "800vw",
  },
  cardcontent: {
    fontSize: "1.1rem",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "1.1rem",
    },
  },
  h3: {
    textAlign: "center",
    padding: "30px",
  },
  card: {
    width: "40%",
    maxWidth: "800vw",
    height: "20vw",
    margin: "50px auto",
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "60vw",
      width: "70%",
    },
  },
  media: {
    height: "auto",
    width: "220px",
    borderRadius: 50,
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
    },
  },
  pdfbutton: {
    background: "red",
    color: "black",
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: 15,
      right: 15,
      padding: 5,
    },
    "&:hover": {
      color: "black",
      textDecoration: "none",
      background: "black",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "red",
    },
  },
}));

export default About;
