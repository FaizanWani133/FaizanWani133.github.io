
import { Box, Heading } from '@chakra-ui/react';
import './App.css';
import About from './Components/AboutMe/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <Box  >
      <Navbar/>
      <About/>
      <Heading bg={"transparent"} mt={"50px"} textAlign={"center"}>SKILLS</Heading>
      <Skills/>
      <Projects/>

    </Box>
    
  );
}

export default App;
