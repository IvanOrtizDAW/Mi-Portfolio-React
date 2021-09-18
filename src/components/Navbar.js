import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import WbIncandescentTwoToneIcon from "@material-ui/icons/WbIncandescentTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import PermContactCalendarTwoToneIcon from "@material-ui/icons/PermContactCalendarTwoTone";
import React, { useState } from "react";
import logo from "../images/sin_fondo.png";
import { Link, animateScroll as Scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { red } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

const links = [
  {
    id: "about",
    text: "Sobre mi",
    icon: <InfoTwoToneIcon style={{ color: red[500] }} fontSize="large" />,
  },

  {
    id: "skills",
    text: "Mis habilidades",
    icon: (
      <WbIncandescentTwoToneIcon
        style={{ color: yellow[500] }}
        fontSize="large"
      />
    ),
  },

  {
    id: "mywork",
    text: "Mis proyectos",
    icon: <WorkTwoToneIcon style={{ color: blue[500] }} fontSize="large" />,
  },

  {
    id: "contact",
    text: "Contacto",
    icon: (
      <PermContactCalendarTwoToneIcon
        style={{ color: green[500] }}
        fontSize="large"
      />
    ),
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar className={classes.barra}>
        <toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="hola" />
          <List className={classes.lista}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-90}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton className={classes.menubotton}>
            <MenuIcon fontSize="large" onClick={() => setOpen(!open)} />
          </IconButton>
        </toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          className={classes.menubottoncancel}
          onClick={() => setOpen(false)}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <List className={classes.listaresponsive}>
          {links.map(({ id, text, icon }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-90}
            >
              <ListItem>
                <h4>
                  <ListItemIcon>{icon}</ListItemIcon>
                </h4>
                {text}
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  barra: {
    background: "white",
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "5.5rem",
    objecFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  lista: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "black",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(6),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "red",
      borderBottom: "3px solid darkred",
    },
  },
  menubotton: {
    edge: "end",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "darkred",
      position: "absolute",
      top: 15,
      right: 15,
      transform: "scale(1.4)",
    },
  },
  menubottoncancel: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "darkred",
      transform: "scale(1.)",
    },
  },
  listaresponsive: {
    width: "80vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h4": {
      margin: theme.spacing(3),
      fontSize: "1.8rem",
      color: "grey",
      fontWeight: "bold",
    },
    "& h4:hover": {
      color: "red",
    },
  },
}));

export default Navbar;
