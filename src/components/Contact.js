import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Contact = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.sectioncontact} id={id}>
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
    background: "#fff",
    color: "#333",
  },
  sectioncontact: {
    maxWidth: "800vw",
    margin: "o auto",
    textDecoration: "underline",
  },
}));

export default Contact;
