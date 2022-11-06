import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import { data } from './ProjectData'

function Projects() {

  return (
    <Box>
        <Heading textAlign={"center"}>PROJECTS</Heading>
        {
         data.map(el=><ProjectCard data={el}/>)  
        }

    </Box>
  )
}

export default Projects