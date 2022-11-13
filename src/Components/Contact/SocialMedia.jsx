import { Flex, IconButton, Link } from '@chakra-ui/react'
import {GoMarkGithub} from "react-icons/go"
import {ImLinkedin} from "react-icons/im"
import {MdEmail} from "react-icons/md"
import {BsTelephoneOutboundFill} from "react-icons/bs"
import React from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll';


function SocialMedia() {


    const social = [
        {
            url:"https://github.com/FaizanWani133",
            logo:<GoMarkGithub/>,
            id:1,
        },
        {
            url:"https://www.linkedin.com/in/faizan-wani-73914a22a/",
            logo:<ImLinkedin/>,
            id:2,
        },
        {
            url:"mailto:wfaizan133@gmail.com",
            logo:<MdEmail/>,
            id:3,
        },
        {
            url:"tel:7006846972",
            logo:<BsTelephoneOutboundFill/>,
            id:4,
        },
    ]
  return (
    <Flex  gap={{base:"20px",sm:"30px",lg:"50px",xl:"60px"}} width={"100%"} justifyContent="center">
        {
            social.map(el=><AnimationOnScroll key={el.id} animateIn="animate__bounceIn"><Link target={"_blank"} href={el.url}><IconButton    borderRadius={"50%"} fontSize="30px" icon={el.logo}></IconButton></Link></AnimationOnScroll>)
        }

    </Flex>  )
}

export default SocialMedia