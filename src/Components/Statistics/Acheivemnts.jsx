import { Box,  Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Acheivemnts() {
    const data = [
        {
            title:"Hours",
            type:"Coding",
            number:"1200+"
        },
        {
            title:"Projects",
            type:"Done",
            number:"10+"
        },
        {
            title:"DSA ",
            type:"Solved",
            number:"500+"
        }
        ,
        {
            title:"Commits",
            type:"Github",
            number:"200+"
        }
    ]
  return (
    <Wrap  width={"100%"}   textAlign={"center"}  >
        {
            data.map(el=><AnimationOnScroll animateIn='animate__fadeIn'><Box width={"200px"}  p={3}  borderRadius={"30px"} border="2px solid #7c7ff3">
                <Text color={"red"} fontSize={"30px"} fontWeight="900">{el.number}</Text>
                <Text color={"grey"}  fontSize={"30px"} fontWeight="800">{el.title}</Text>
                <Text color={"grey"} fontSize={"20px"} fontWeight="600">{el.type}</Text>
            </Box></AnimationOnScroll>)
        }

    </Wrap>
  )
}

export default Acheivemnts