import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};
function FormData() {
  const toast = useToast();
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  emailjs.init("iK__ZbSVSIft1TY_Y");

  function sendEmail() {
    setLoading(true);
    emailjs
      .send("service_5yotly7", "template_1nkxt4t", form, "iK__ZbSVSIft1TY_Y")
      .then(() => {
        setLoading(false);
        setForm(initialValues);
        return toast({
          title: "Email Sent",
          description: "Email has been sent",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  return (
    <FormControl>
      <Heading mb={10} textAlign={'center'} textTransform={'uppercase'}>Contact me</Heading>

      <Stack
        alignItems={"center"}
        justify={"center"}
        margin={"0 auto"}
        maxW={"800px"}
        mb={10}
        p={2}
      >
        <Flex gap={2} width={"100%"}>
          <Input
            variant={"filled"}
            required
            name="name"
            value={form.name}
            placeholder="Name"
            type={"text"}
            onChange={(e) => handleChange(e)}
          ></Input>
          <Input
            variant={"filled"}
            required
            name="email"
            value={form.email}
            placeholder="Email"
            type={"email"}
            onChange={(e) => handleChange(e)}
          ></Input>
          <Input
            variant={"filled"}
            required
            name="number"
            value={form.number}
            placeholder="Phone Number"
            type={"number"}
            onChange={(e) => handleChange(e)}
          ></Input>
        </Flex>
        <Textarea
          variant={"filled"}
          required
          name="message"
          minH={"140px"}
          value={form.message}
          placeholder="Enter Your Message"
          onChange={(e) => handleChange(e)}
        ></Textarea>
        <Button
          w={"100%"}
          variant={"solid"}
          loadingText="Submitting"
          isLoading={loading}
          disabled={true}
          onClick={sendEmail}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
}

export default FormData;
