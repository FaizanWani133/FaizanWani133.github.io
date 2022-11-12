import { Flex, IconButton } from '@chakra-ui/react'
import {GoMarkGithub} from "react-icons/go"
import {ImLinkedin} from "react-icons/im"
import {MdEmail} from "react-icons/md"
import {BsTelephoneOutboundFill} from "react-icons/bs"
import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function SocialMedia() {


    const social = [
        {
            url:"https://github.com/FaizanWani133",
            logo:<GoMarkGithub/>,
        },
        {
            url:"https://www.linkedin.com/in/faizan-wani-73914a22a/",
            logo:<ImLinkedin/>,
        },
        {
            url:"",
            logo:<MdEmail/>,
        },
        {
            url:"",
            logo:<BsTelephoneOutboundFill/>,
        },
    ]
  return (
    <Flex  gap={{base:"20px",sm:"30px",lg:"50px",xl:"60px"}} width={"100%"} justifyContent="center">
        {
            social.map(el=><AnimationOnScroll animateIn="animate__bounceIn"><IconButton    borderRadius={"50%"} fontSize="30px" icon={el.logo}></IconButton></AnimationOnScroll>)
        }

    </Flex>  )
}

export default SocialMedia