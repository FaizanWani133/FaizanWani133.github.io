import { Heading, Wrap } from '@chakra-ui/react'
import React from 'react'
import Acheivemnts from './Acheivemnts'
import GithubCalander from './GithubCalander'
import GithubData from './GithubData'
import GithubLanguages from './GithubLanguages'
import GithubStats from './GithubStats'

function Stats() {
  return (
    <><Heading textAlign={"center"}><span className='purpleText'>S</span>TATISTICS</Heading>
    <Wrap margin={"50px auto"} spacing="30px"  justify="center" width={{ base: "95%", sm: "90%", lg: "90%", xl: "90%" }}>
        
        <GithubCalander/>
        <GithubStats/>
        <GithubData/>
        <GithubLanguages/>
        <Acheivemnts/>
    </Wrap>
    </>
  )
}

export default Stats