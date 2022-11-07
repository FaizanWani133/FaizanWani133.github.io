
import { Box, Heading } from '@chakra-ui/react';
import './App.css';
import About from './Components/AboutMe/About';
import Contactme from './Components/Contact/Contactme';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import GithubCalander from './Components/Statistics/GithubCalander';
import Stats from './Components/Statistics/Stats';

function App() {
  return (
    <Box  >
      <Navbar/>
      <About/>
      <Heading bg={"transparent"} mt={"50px"} textAlign={"center"}>SKILLS</Heading>
      <Skills/>
      <Projects/>
      <Stats/>
      <Contactme/>

    </Box>
    
  );
}

export default App;
