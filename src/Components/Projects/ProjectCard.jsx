import { Badge, Box, Button, Flex, HStack, Img, Text, Wrap } from "@chakra-ui/react";
import React from "react";

function ProjectCard({ data }) {
  return (
    <Flex
    mb={"50px"}
      gap={"20px"}
      _even={{flexDir:{base:"column",sm:"column",lg:"row-reverse",xl:"row-reverse"}}}
      
      flexDir={{ base: "column", sm: "column", lg: "row", xl: "row" }}
      
    >
      <Box borderRadius="10px" p={3} border={"3px solid #77A6F7"} bg="#77A6F7">
        <Box>
          <Img
            border={"2px solid black"}
            borderRadius="10px"
            width={"100%"}
            src={data.img1}
          ></Img>
        </Box>
        <Wrap mt={"10px"} width={"100%"} justify="center">
          <Img
            borderRadius="10px"
            border={"2px solid #D3E3FC"}
            width={"120px"}
            src={data.img2}
          ></Img>
          <Img
            borderRadius="10px"
            border={"2px solid #D3E3FC"}
            width={"120px"}
            src={data.img2}
          ></Img>
          <Img
            borderRadius="10px"
            border={"2px solid #D3E3FC"}
            width={"120px"}
            src={data.img2}
          ></Img>
        </Wrap>
      </Box>
      <Box >
        <Text mb={"20px"} color={"#9AA4EC"} fontWeight="600" fontSize={{base:"18px",sm:"20px",lg:"30px"}}>{data.title}</Text>
        <Text mb={"20px"} >{data.description}</Text>
        <Box mb={"20px"} >{data.techStacks.map((el) => (
          <Badge>{el}</Badge>
        ))}</Box>
        
        <Button>Github</Button>
        <Button>Live</Button>
      </Box>
    </Flex>
  );
}

export default ProjectCard;
