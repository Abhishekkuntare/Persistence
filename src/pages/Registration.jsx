import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import Fade from "react-reveal/Fade";

function Registration() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().email("Valid email!").required("Email required!"),
    password: yup.string().min(8).max(20).required("Password required!"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      navigate("/login");
    });
  };

  return (
    <Fade top>
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create an account
            </Heading>

            <Text fontSize={"lg"} color={"gray.400"}>
              Already have an account?{" "}
              <Link style={{ color: "#FA9D8A" }} to="/login" color={"blue.400"}>
                Sign in
              </Link>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className="formContainer">
                  <FormControl id="email" isRequired>
                    <FormLabel mt={7}>Email address</FormLabel>
                    <ErrorMessage
                      style={{ color: "yellow", margin: "100px" }}
                      name="username"
                      component="span"
                    />
                    <Field
                      type="email"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px gray solid",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="username"
                      placeholder="(Ex. John123...)"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel mt={10}>Password</FormLabel>
                    <InputGroup>
                      <ErrorMessage
                        style={{ color: "red" }}
                        name="password"
                        component="span"
                      />
                      <Field
                        autoComplete="off"
                        type="password"
                        id="inputCreatePost"
                        name="password"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px gray solid",
                          padding: "8px",
                          borderRadius: "10px",
                        }}
                        placeholder="Your Password..."
                      />
                    </InputGroup>
                    <Stack spacing={10} pt={2}>
                      <Button
                        onClick={onSubmit}
                        type="register"
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        <button type="submit">Sign Up</button>
                      </Button>
                    </Stack>
                  </FormControl>
                </Form>
              </Formik>

              {/* --------------------------------------------------------------- */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Fade>
  );
}

export default Registration;
