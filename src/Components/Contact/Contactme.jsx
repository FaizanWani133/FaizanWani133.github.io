import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import SocialMedia from './SocialMedia'

function Contactme() {
  return (
    <Box width={"100%"}>
        <Heading mb={"50px"} textAlign={"center"}>CONTACT ME</Heading>
        <SocialMedia/>
    </Box>
  )
}

export default Contactme