import { AppBar, IconButton, List, makeStyles } from "@material-ui/core";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import WbIncandescentTwoToneIcon from "@material-ui/icons/WbIncandescentTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import PermContactCalendarTwoToneIcon from "@material-ui/icons/PermContactCalendarTwoTone";
import React from "react";
import logo from "../images/sin_fondo.png";
import { Link, animateScroll as Scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

const links = [
  {
    id: "about",
    text: "Sobre mi",
    icon: <InfoTwoToneIcon />,
  },

  {
    id: "skills",
    text: "Mis habilidades",
    icon: <WbIncandescentTwoToneIcon />,
  },

  {
    id: "mywork",
    text: "Mis proyectos",
    icon: <WorkTwoToneIcon />,
  },

  {
    id: "contact",
    text: "Contacto",
    icon: <PermContactCalendarTwoToneIcon />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
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
          <MenuIcon fontSize="large" />
        </IconButton>
      </toolbar>
    </AppBar>
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
      transform: "scale(1.5)",
    },
  },
}));

export default Navbar;
