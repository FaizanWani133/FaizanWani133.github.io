import {
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Flex p={10} direction={"row"} justifyContent={"space-evenly"}>
        <Stack flex={.5} paddingY={20}>
          <Heading>Hi there! I'm</Heading>
          <Heading fontSize={100}>
            <span style={{ marginRight: "100px" }}>Faizan</span>
            <br />
            <span style={{ marginLeft: "100px" }}>Wani</span>
          </Heading>
          <Heading mt={5}>Software Developer</Heading>
          <Text mt={10} >
            Passionate about crafting seamless web and mobile experiences using
            the latest technologies. With a focus on the MERN (MongoDB,
            Express.js, React.js, Node.js) stack, I specialize in building
            scalable and responsive applications that deliver exceptional user
            experiences. Let's turn your ideas into reality together!
          </Text>
          <Button mt={5}>Get In Touch</Button>
        </Stack>
      <Img
        alt="random image"
        src={require("./../Images/profile3.png")}
        width="600px"
        objectFit={'cover'}
      ></Img>
    </Flex>
  );
}

export default About;
