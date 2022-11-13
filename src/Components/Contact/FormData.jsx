import { Box, Button,  FormControl,  Input,  Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function FormData() {
  return (
    
       
        <Box>
            <form  name='contact' method='post'>
            <FormControl borderRadius={"10px"} display={"flex"} flexDir="column" gap={"20px"}  p={4} border={"1px solid black"} margin={"50px auto"} width={{base:"80%",sm:"60%",lg:"50%",xl:"40%"}}>
            <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
            <Text fontSize={"25px"} fontWeight="500" textAlign={"center"}><span className='purpleText'>GET</span> IN TOUCH </Text>
                <Input placeholder='Enter Full Name' type={"text"}></Input>
                <Input placeholder='Enter Email Address' type={"email"}></Input>
                <Input placeholder='Enter Phone Number' type={"number"}></Input>
                <Textarea minH={"150px"} placeholder='Enter Your Message'></Textarea>
                <Button type='submit'colorScheme={"red"}>Submit</Button>   
            </FormControl>
            </form>
        </Box>

    
  )
}

export default FormData