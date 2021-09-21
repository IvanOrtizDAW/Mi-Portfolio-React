import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import React from "react";
import dra from "../images/dra.png";
import design from "../images/design.jpg";
import git from "../images/git.jpg";

const Mywork = ({ title, dark, id }) => {
  const trabajos = [
    {
      src: dra,
      title: "Dranimaco(tienda online y de formación 3D) ",
      link: "https://github.com/IvanOrtizDAW/Dranimaco",
    },
    {
      src: design,
      title: "Mis diseños realizados",
      link: "https://github.com/IvanOrtizDAW/Design",
    },
    {
      src: git,
      title: "Mi página de Git Hub",
      link: "https://github.com/IvanOrtizDAW",
    },
  ];
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionwork} id={id}>
        <Typography variant="h3" className={classes.h3}>
          {title}
        </Typography>
        <Grid container classes={classes.grid}>
          {trabajos.map(({ title, src, link }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia image={src} className={classes.media} title="foto" />
                <CardContent className={classes.cardcontent}>
                  <Link
                    href={link}
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
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
  sectionwork: {
    maxWidth: "90%",
    margin: "0 auto",
  },
  h3: {
    textAlign: "center",
    padding: "30px",
  },
  card: {
    maxWidth: 465,
    minHeight: 275,
    margin: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 905,
      minHeight: 375,
    },
  },
  media: {
    height: 0,
    paddingTop: "68.25%",
  },
  cardcontent: {
    fontSize: "1.1rem",
    display: "flex",
    marginTop: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "1.1rem",
    },
  },
}));

export default Mywork;
