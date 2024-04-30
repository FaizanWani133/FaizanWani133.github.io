import { Box, ChakraProvider, Divider, Heading } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Statistics/Stats";
import ReactGA from "react-ga";
import theme from "./Theme/theme";
import FormData from "./Components/FormData";
// const trackingId = "G-08JCD2XE0F";
// ReactGA.initialize(trackingId);

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box>
      <Navbar />
       <About />
      <Skills />
      <Projects />
       {/* <Stats />
      <Contactme /> */}
      <FormData />

      <Divider/>

      <Footer /> 
    </Box>
    </ChakraProvider>
  );
}

export default App;
