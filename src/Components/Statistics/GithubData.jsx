import { Box } from '@chakra-ui/react'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
function GithubData() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInRight'>
    <Box  border={"2px solid #7c7ff3"} borderRadius="10px" overflow={"hidden"} >
        <a target="_blank" href="http://www.github.com/FaizanWani133"><img src="https://github-readme-streak-stats.herokuapp.com/?user=FaizanWani133&stroke=444e59&background=ffffff&ring=6366f1&fire=6366f1&currStreakNum=444e59&currStreakLabel=6366f1&sideNums=444e59&sideLabels=444e59&dates=444e59&hide_border=true" alt='hello' /></a>

    </Box>
    </AnimationOnScroll>
  )
}

export default GithubData