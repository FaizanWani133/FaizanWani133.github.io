import { Box, Img, Link } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function GithubCalander() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown">
    <Box border={"2px solid #7c7ff3"} borderRadius="10px" overflow={"hidden"} width={{base:"100%",sm:"100%",lg:"80%",xl:"70%"}} margin={"auto"} mt="50px">
      <Link href="http://www.github.com/FaizanWani133"><Img   src="https://activity-graph.herokuapp.com/graph?username=FaizanWani133&bg_color=ffffff&color=444e59&line=444e59&point=444e59&area_color=ffffff&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph" alt="GitHub Commits Graph" /></Link>
    </Box>
    </AnimationOnScroll>
  );
}

export default GithubCalander;
