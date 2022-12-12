import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function FormData() {
  const toast = useToast();
  const [form, setForm] = useState({});
  function handleChange(e, key) {
    console.log(form);
    setForm({ ...form, [key]: e.target.value });
  }
  emailjs.init("iK__ZbSVSIft1TY_Y");

  function sendEmail() {
    emailjs
      .send("service_5yotly7", "template_1nkxt4t", form, "iK__ZbSVSIft1TY_Y")
      .then(()=>{
        return toast(
          {
            title: 'Email Sent',
          description: "Email has been sent",
          status: 'success',
          duration: 3000,
          isClosable: true,
          }
        )
      });
  }

  return (
    <Box>
      <FormControl
        borderRadius={"10px"}
        display={"flex"}
        flexDir="column"
        gap={"20px"}
        p={4}
        border={"1px solid black"}
        margin={"50px auto"}
        width={{ base: "80%", sm: "60%", lg: "50%", xl: "40%" }}
      >
        <Text fontSize={"25px"} fontWeight="500" textAlign={"center"}>
          <span className="purpleText">GET</span> IN TOUCH{" "}
        </Text>

        <Input
          required
          name="name"
          value={form.name}
          placeholder="Enter Full Name"
          type={"text"}
          onChange={(e) => handleChange(e, "name")}
        ></Input>
        <Input
          required
          name="email"
          placeholder="Enter Email Address"
          type={"email"}
          onChange={(e) => handleChange(e, "email")}
        ></Input>
        <Input
          required
          name="number"
          placeholder="Enter Phone Number"
          type={"number"}
          onChange={(e) => handleChange(e, "number")}
        ></Input>
        <Textarea
          required
          name="message"
          minH={"150px"}
          placeholder="Enter Your Message"
          onChange={(e) => handleChange(e, "message")}
        ></Textarea>
        {<Button disabled={!form.name || !form.email || !form.number || !form.message} onClick={sendEmail} type="submit" colorScheme={"red"}>
          Submit
        </Button>}
      </FormControl>
    </Box>
  );
}

export default FormData;
