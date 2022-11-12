
import { Box, Heading } from '@chakra-ui/react';
import './App.css';
import About from './Components/AboutMe/About';
import Contactme from './Components/Contact/Contactme';
import Footer from './Components/footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Stats from './Components/Statistics/Stats';

function App() {
  return (
    <Box  >
      <Navbar/>
      <About />
      <Heading id='Skills' bg={"transparent"} mt={"50px"} textAlign={"center"}><span className='purpleText'>S</span>KILLS</Heading>
      <Skills/>
      <Projects />
      <Stats/>
      <Contactme/>
      <Footer/>

    </Box>
    
  );
}

export default App;
