import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";

function App() {
  const classes = useStyles();
  return (
    <div className="classes.root">
      <Navbar />
      <About title="Sobre mi" id="about" />
      <Skills title="Mis Habilidades" id="skills" />
      <Mywork title="Mis trabajos" id="mywork" />
      <Contact title="Contacto" id="contact" />
    </div>
  );
}

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
