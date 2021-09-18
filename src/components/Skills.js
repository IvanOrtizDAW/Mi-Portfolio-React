import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Technologies from "./Technologies";

const Skills = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.sectionskills} id={id}>
        <Typography variant="h3" className={classes.h3}>
          {title}
        </Typography>
        <Technologies />
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
  sectionskills: {
    maxWidth: "800vw",
    margin: "o auto",
  },
  h3: {
    textAlign: "center",
    padding: "30px",
  },
}));

export default Skills;
