import { Box, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'

function Logo() {
  return (
    <Box>
        <Text fontSize={{base:"18px",sm:"25px",lg:"30px",xl:"35px"}} color="#77A6F7"><Link href='#About%20Me' ><span className='purpleText'> F</span>W</Link></Text>

    </Box>
  )
}

export default Logo