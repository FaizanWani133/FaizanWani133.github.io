import { Box,  Link, Text } from '@chakra-ui/react'
import React from 'react'


function Logo() {
  return (
   
    <Box>
      
        <Text _hover={{textDecoration:"none",transform:"scale(1.2)",color:"red"}} animation="ease-in" fontSize={{base:"18px",sm:"25px",lg:"30px",xl:"35px"}} color="#77A6F7"><Link _hover={{textDecoration:"none",transform:"scale(1.2)"}} href='#About%20Me' > FW</Link></Text>
        
    </Box>
    
  )
}

export default Logo