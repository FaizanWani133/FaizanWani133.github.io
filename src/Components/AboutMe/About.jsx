import { Box, Button, Divider, Flex, Heading, Img, Text, VStack, Wrap } from "@chakra-ui/react";
import React from "react";
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <Box  p={5} bg={"transparent"} id="About%20Me">
        
      <Flex
      bg={"transparent"}
        margin={"0 auto"}
        width="80%"
        p={{ base: "10px", sm: "20px", lg: "25px", xl: "30px" }}
        flexDir={{
          base: "column-reverse",
          sm: "column-reverse",
          lg: "row",
          xl: "row",
        }}
        justifyContent={"center"}
        align="center"
      >
        <Box
        bg={"transparent"}
          width={{ base: "100%", sm: "100%", lg: "50%", xl: "50%" }}
          textAlign={{ base: "center", sm: "center", lg: "left", xl: "left" }}
          lineHeight="30px"
        >
          <Text fontSize={{base:"20px",sm:"25px",lg:"30px",xl:"30px"}} mb="20px" fontWeight="bold">
          

<Typewriter
  options={{
    strings: ['Hi , I am Fayzan Mukhtar'],
    autoStart: true,
    loop: true,
  }}
/>
                
          </Text>
          <Text fontWeight={"500"}>
            I am a Full Stack Web Developer and i have knowledge in HTML, CSS,
            JS, REACT and i make user-friendly websites.
          </Text>
          <Button mt={"10px"} colorScheme="red">
            Download CV
          </Button>
        </Box>
        <Box width={{ base: "100%", sm: "100%", lg: "50%", xl: "50%" }}>
          <Img
            margin={"auto"}
            width={{base:"150px",sm:"180px",lg:"200px",xl:"250px"}}
            height={{base:"150px",sm:"180px",lg:"200px",xl:"250px"}}
            borderRadius={"50%"}
            objectFit="cover"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQF3EuoNrSUnxg/profile-displayphoto-shrink_200_200/0/1642962418101?e=1673481600&v=beta&t=RJMXd-tr2JfxtL20ez-uJsgfyK9dXHrBQCht8ifo95Y"
          ></Img>
        </Box>
      </Flex>
      <Box width={"100%"} p="4" mb={"20px"}><Heading textAlign={"center"}><span className='purpleText'>A</span>BOUT ME</Heading></Box>
      
      <Flex
        flexDir={{ base: "column", sm: "column", lg: "row", xl: "row" }}
        width={{base:"95%",sm:"90%",lg:"80%",xl:"80%"}}
        
        margin={"0 auto"}
        p={4}
        gap="20px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={"20px"}
      >
        <Box lineHeight={"40px"} bg={"#D3E3FC"} borderRadius="10px" p="4" width={{base:"100%",sm:"100%",lg:"30%",xl:"30%"}} >
          <Text mb={"10px"} fontSize={{base:"15px",sm:"18px",lg:"22px",xl:"22px"}} fontWeight="500">Personal Details</Text>
          <Divider/>
          <Text>
            <b>Email:</b> wfaizan133@gmail.com
          </Text>
          <Text>
            <b>Language:</b> English
          </Text>
          <Text>
            <b>Nationality:</b> Indian
          </Text>
        </Box>
        <Box width={{base:"100%",sm:"100%",lg:"70%",xl:"70%"}} p="4">
          <Text mb={"10px"} fontSize={{base:"15px",sm:"18px",lg:"22px",xl:"22px"}} fontWeight="500">I am Full Stack Web Developer</Text>
          <Text lineHeight={"35px"}>
            My name is Fayzan Wani, I am from Shopian, J&K.
            Passionate Full Stack Web Developer with skills in the MERN stack, I
            have learned Full Stack Web Development in Masai school. Skilled in
            problem- solving and execution of software tasks from start to
            finish. I look forward to joining a company where I can contribute
            to individual and company growth..
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
