import {
  Box,
  Divider,
  Text,
  Img,
  Center,
  Stack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import FormData from "./FormData";

function Footer() {
  return (
    <Stack p={10} textAlign={"center"} gap={10} alignItems={"center"}>
      <Center>
        <Logo />
      </Center>

      <Text noOfLines={2} fontSize={"30px"} w={"350px"} textAlign={"center"}>
        Living, learning, & leveling up one day at a time.
      </Text>

      <SocialMedia />

      <Text>© 2022 Faizan Wani . All rights reserved. </Text>
    </Stack>
  );
}

export default Footer;
