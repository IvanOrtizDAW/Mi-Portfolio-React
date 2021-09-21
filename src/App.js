import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: red[500] },
    secondary: { main: "#333" },
  },
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className="classes.root">
        <Navbar />
        <About title="Sobre mi" id="about" dark={true} />
        <Skills title="Mis Habilidades" id="skills" dark={false} />
        <Mywork title="Mis trabajos" id="mywork" dark={true} />
        <Contact title="Contacto" id="contact" dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
