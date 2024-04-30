import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Img,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import Headroom from "react-headroom";
import Navlinks from "./Navbar/Navlinks";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Logo from "./Logo";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const theme = useTheme();
  console.log({theme})
  return (
    <Headroom style={{
      backgroundColor:colorMode==='dark'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.9)'
    }}> 
      <Flex
        width={"100%"}
        p={4}
        paddingX={{ base: "10px", sm: "20px", lg: "25px", xl: "30px" }}
        align="center"
        justify={"space-between"}
      >
      <Logo/>
        
        {/* <Logo /> */}
        {/* <Navlinks /> */}
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0" ml={"auto"}>
            {colorMode === "light" ? (
              <BsFillMoonStarsFill size={24} />
            ) : (
              <BsSunFill size={24} />
            )}
          </FormLabel>
          <Switch id="theme-toggle" onChange={() => toggleColorMode()} />
        </FormControl>
      </Flex>

      {/* <Divider /> */}
    </Headroom>
  );
}

export default Navbar;
