import { Box, Flex, Link } from "@chakra-ui/react";
import { FaGithub ,FaLinkedin ,FaFacebook,FaInstagram } from "react-icons/fa";
import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

function SocialMedia() {
  const social = [
    {
      url: "https://github.com/FaizanWani133",
      logo: <FaGithub />,
      id: 1,
      title: "Github",
    },
    {
      url: "https://www.linkedin.com/in/faizan-wani-73914a22a/",
      logo: <FaLinkedin />,
      id: 2,
      title: "LinkedIn",
    },
    {
      url: "mailto:wfaizan133@gmail.com",
      logo: <FaFacebook  />,
      id: 3,
      title: "Facebook",
    },
    {
        url: "mailto:wfaizan133@gmail.com",
        logo: <FaInstagram  />,
        id: 4,
        title: "Instagram",
      },
  ];
  return (
    <Flex
      gap={{ base: "20px", sm: "30px", lg: "50px", xl: "60px" }}
      justifyContent="center"
    >
      {social.map((el) => (
            <Link
              target={"_blank"}
              href={el.url}
              textAlign="center"
              alignContent={"center"}
              fontSize="30px"
              _hover={{ color: "black" }}
            >
              {el.logo}
            </Link>
      ))}
    </Flex>
  );
}

export default SocialMedia;
