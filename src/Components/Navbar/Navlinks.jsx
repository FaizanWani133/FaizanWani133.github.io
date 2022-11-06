import { Flex, Link, Text ,Button } from '@chakra-ui/react'

import React from 'react'

function Navlinks() {
    const navLinks = [
        {
            path:"/",
            title:"Home"
        },
        {
            path:"/",
            title:"About Me"
        },
        {
            path:"/",
            title:"Skills"
        },
        {
            path:"/",
            title:"Projects"
        },
        {
            path:"/",
            title:"Contact"
        },
        
    ]
  return (<Flex justify={"space-between"} align="center" flexGrow=".2">
    {
        navLinks.map(link=><Link  color={"#77A6F7"} _hover={{color:"red",transform:"scale(1.2)",textDecoration:"none"}} textDecoration="none" fontSize={"18px"} key={link.title}>{link.title}</Link>)
    }
    <Button colorScheme={"red"}>Resume</Button>
    </Flex>
    
  )
}

export default Navlinks