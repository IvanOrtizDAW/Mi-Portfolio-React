import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { Class, EmojiNatureOutlined } from "@material-ui/icons";
import React, { useRef } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/styles";

const Contact = ({ id, title }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cjx0lqo",
        "template_hy66w3k",
        e.target,
        "user_YjyXRbSbFGxI9mBD4L44n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const classes = useStyles();
  //**para utilizar ui core */

  return (
    <div className={classes.section}>
      <div className={classes.sectioncontact} id={id}>
        <Typography variant="h3" className={classes.h3}>
          {title}
        </Typography>
        <Paper className={classes.papel}>
          <div className={classes.titulo}>
            {" "}
            <Typography variant="h5" className={classes.h5}>
              Contacta con un mensaje
            </Typography>
          </div>
          <form
            className={classes.formulario}
            ref={form}
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
          >
            <TextField label="Tu nombre:" name="nombre" />
            <br />
            <TextField label="Tu email:" name="email" />
            <br />
            <TextField label="Tu mensaje:" name="mensaje" />
            <br />
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              <a>Enviar</a>
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: "center",
    minHeight: "80vh",
    background: "#fff",
    color: "#333",
    display: "flex",
    flexDirection: "colunm",
    justifycontent: "flex-start",
    alignitems: "center",
  },
  sectioncontact: {
    maxWidth: "80vw",
    margin: "20px auto",
    padding: "20px",
  },
  h3: {
    textAlign: "center",
    padding: "30px",
  },
  papel: {
    background: "#333",
    minheight: "1200px",
    minwidth: "1000px",
    margin: "0 auto",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifycontent: "space-between",
    padding: theme.spacing(4),
    "& button": {
      background: "white",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      background: "black",
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& input": {
      color: "white",
      marginBottom: theme.spacing(1),
    },
  },
  titulo: {
    textAlign: "center",
    padding: "30px",
    color: theme.palette.primary.main,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Contact;
