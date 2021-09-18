import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Mywork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionwork} id={id}>
        <Typography variant="h3">{title}</Typography>
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
    maxWidth: "800vw",
    margin: "o auto",
    textDecoration: "underline",
  },
}));

export default Mywork;
