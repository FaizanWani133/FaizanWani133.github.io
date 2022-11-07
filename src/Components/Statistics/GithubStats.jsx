import { Box, Img, Link } from '@chakra-ui/react'
import React from 'react'

function GithubStats() {
  return (
    <Box border={"2px solid #7c7ff3"} borderRadius="10px" overflow={"hidden"} >
        <Link href="http://www.github.com/FaizanWani133"><Img src="https://github-readme-stats.vercel.app/api?username=FaizanWani133&show_icons=true&hide=&count_private=true&title_color=6366f1&text_color=444e59&icon_color=444e59&bg_color=ffffff&hide_border=true&show_icons=true" alt="FaizanWani133's GitHub stats" /></Link>
    </Box>
  )
}

export default GithubStats