import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

function SocialMedia() {
  const social = [
    {
      url: "https://github.com/FaizanWani133",
      logo: <GoMarkGithub />,
      id: 1,
      title: "Github",
    },
    {
      url: "https://www.linkedin.com/in/faizan-wani-73914a22a/",
      logo: <ImLinkedin  />,
      id: 2,
      title: "LinkedIn",
    },
    {
      url: "mailto:wfaizan133@gmail.com",
      logo: <MdEmail />,
      id: 3,
      title: "Email Me",
    },
    {
      url: "tel:7006846972",
      logo: <BsTelephoneOutboundFill  />,
      id: 4,
      title: "7006846972",
    },
  ];
  return (
    <Flex
      gap={{ base: "20px", sm: "30px", lg: "50px", xl: "60px" }}
      width={"100%"}
      justifyContent="center"
    >
      {social.map((el) => (
        <AnimationOnScroll key={el.id} animateIn="animate__bounceIn">
          <Box  textAlign={"center"} alignItems="center" justifyContent="center" display={"flex"} flexDir="column">
            <Link
              target={"_blank"}
              href={el.url}
              textAlign="center"
              alignContent={"center"}
              fontSize="30px"
              color={"grey"}
              _hover={{color:"black"}}
              
            >
              {el.logo}
              
            </Link>
            <Link color={"grey"} fontWeight={"500"} mt={"10px"} _hover={{textDecoration:"none",color:"black"}} display={{base:"none",sm:"none",lg:"block"}} href={el.url} fontSize={"20px"}>{el.title}</Link>
          </Box>
        </AnimationOnScroll>
      ))}
    </Flex>
  );
}

export default SocialMedia;
