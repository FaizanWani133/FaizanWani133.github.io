import { Badge, Box, Button, Flex, Img, Text, Wrap } from '@chakra-ui/react'
import React from 'react'

function ProjectCard({data}) {

  return (
    <Flex flexDir={{base:"column",sm:"column",lg:"row",xl:"row"}}>
        <Wrap>
            <Img width={"100%"} flexBasis="100%" src={"https://github.com/FaizanWani133/my-portfolio/blob/main/src/Components/Projects/ProjectCard.jsx"}></Img>
            <Img width={"200px"} src={data.img2} ></Img>
            <Img width={"200px"} src={data.img2} ></Img>
            <Img width={"200px"} src={data.img2} ></Img>

        </Wrap>
        <Box>
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
            {
                data.techStacks.map(el=><Badge>{el}</Badge>)
            }
            <Button>Github</Button>
            <Button>Live</Button>
        </Box>


    </Flex>
    
  )
}

export default ProjectCard