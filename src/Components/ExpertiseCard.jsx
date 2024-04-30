import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExpertiseCard = ({ icon, title, description , isStart , isEnd }) => {
  return (
    <Box p={5} flex={.2} alignSelf={'center'} border={'2px solid'} sx={{borderCollapse:'collapse'}} >
      <Flex gap={4} alignItems={'center'}>
        {icon}
        <Heading>{title}</Heading>
      </Flex>
      <Text mt={10}>{'<h2>'}</Text>
      <Text textDecoration={'line-through'} ml={10} lineHeight={2}>{description}</Text>
      <Text>{'</h2>'}</Text>


    </Box>
  );
};

export default ExpertiseCard;
