import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <Flex
      position={"fixed"}
      top="0"
      left={"0"}
      width={"100%"}
      p={4}
      paddingX={{base:"10px",sm:"20px",lg:"25px",xl:"30px"}}
      align="center"
      justify={"space-between"}
      zIndex="5"
      bg={"rgba(255,255,255,.9)"}
    >
      <Logo />
      <Navlinks />
    </Flex>
  );
}

export default Navbar;
