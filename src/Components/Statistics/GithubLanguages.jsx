import { Box } from '@chakra-ui/react'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function GithubLanguages() {
  return (
    <AnimationOnScroll animateIn='animate__animate__fadeInUp'>
    <Box border={"2px solid #7c7ff3"} borderRadius="10px" overflow={"hidden"}>
        <a target="_blank" href="https://github.com/FaizanWani133" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FaizanWani133&langs_count=10&title_color=6366f1&text_color=444e59&icon_color=444e59&bg_color=ffffff&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>

    </Box>
    </AnimationOnScroll>
  )
}

export default GithubLanguages