import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import { data } from './ProjectData'

function Projects() {

  return (
    <Box  width={{base:"95%",sm:"90%",lg:"85%",xl:"85%"}} margin="30px auto">
        <Heading mt={"50px"} mb={"50px"} textAlign={"center"}>PROJECTS</Heading>
        {
         data.map(el=><ProjectCard data={el}/>)  
        }

    </Box>
  )
}

export default Projects