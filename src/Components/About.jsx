import {
  Button,
  Box,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Flex p={10} direction={"row"} justifyContent={"space-evenly"} wrap={'wrap'}>
      <Stack flex={{xl:.5}} paddingY={{xl:20}}>
        <Heading fontSize={{xl:40}}>Hi there! I'm</Heading>
        <Heading fontSize={{xl:100}}>
          <span style={{ marginRight: "100px" }}>Faizan</span>
          <br />
          <span style={{ marginLeft: "100px" }}>Wani</span>
        </Heading>
        <Heading mt={5} fontSize={{xl:50}}>Software Developer</Heading>
        <Text mt={10} >
          Passionate about crafting seamless web and mobile experiences using
          the latest technologies. With a focus on the MERN (MongoDB,
          Express.js, React.js, Node.js) stack, I specialize in building
          scalable and responsive applications that deliver exceptional user
          experiences. Let's turn your ideas into reality together!
        </Text>
        <Button mt={5}>Get In Touch</Button>
      </Stack>
      <Box flex={{xl:.5}} maxWidth={{xl:"500px"}} paddingY={{xl:20}}>
        <Img
          alt="random image"
          src={require("./../Images/profile3.png")}
          objectFit={'cover'}
          width="100%"
        />
      </Box>
    </Flex>
  );
}

export default About;
