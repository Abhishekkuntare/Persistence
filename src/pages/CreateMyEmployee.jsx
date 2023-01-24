import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, Forma } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import Employee_Cards3 from "../components/Employee/Employee_Cards3/Employee_Cards3";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
function CreateMyEmployee() {
  const avatars = [
    {
      name: "Abhishek Kuntare",
      url: "https://abhishekkuntare.vercel.app/images/Abhishek.jpg",
    },
    {
      name: "Segun Adebayo",
      url: "https://bit.ly/sage-adebayo",
    },
    {
      name: "Kent Dodds",
      url: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "Prosper Otemuyiwa",
      url: "https://bit.ly/prosper-baba",
    },
    {
      name: "Christian Nwamba",
      url: "https://bit.ly/code-beast",
    },
  ];
  const { authState } = useContext(AuthContext);

  let history = useNavigate();
  const initialValues = {
    userName: "",
    designation: "",
    salary: "",
    gender: "",
    departmentName: "",
    city: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Name required!"),
    designation: yup.string().required("Desig. required!"),
    salary: yup.string().required("Salary required!"),
    gender: yup.string().required("Gender required!"),
    departmentName: yup.string().required("DeptName required!"),
    city: yup.string().required("City required!"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/myprofile", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log(response);
        <h1>Loading.....</h1>;
        history("/");
      });
  };

  return (
    <div className="createPostPage">
      <Fade left>
        <Box position={"relative"}>
          <Container
            as={SimpleGrid}
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                Complete the profile
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  &
                </Text>{" "}
                And get authorized
              </Heading>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bgGradient: "linear(to-bl, red.400,pink.400)",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontFamily={"heading"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  width={useBreakpointValue({ base: "44px", md: "60px" })}
                  height={useBreakpointValue({ base: "44px", md: "60px" })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  YOU
                </Flex>
              </Stack>
            </Stack>
            <Stack
              border={"1px solid purple"}
              bg={"transparent"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"blue.100"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Continue Profile
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  A profile-type defines a set of properties, also referred to
                  as a schema, that are inherent to all profiles of that type.
                </Text>

                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  <Form className="formContainer">
                    {/* userName */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      type="text"
                      id="inputCreatePost"
                      name="userName"
                      placeholder="Alex kuntare"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="userName"
                      component="span"
                    />
                    {/* designation */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="designation"
                      placeholder="developer"
                      type="text"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="designation"
                      component="span"
                    />
                    {/* salary */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="salary"
                      placeholder="10k"
                      type="text"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="salary"
                      component="span"
                    />
                    {/* gender */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="gender"
                      placeholder="male"
                      type="text"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="gender"
                      component="span"
                    />
                    {/* departmentName */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="departmentName"
                      placeholder="IT"
                      type="text"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="departmentName"
                      component="span"
                    />

                    {/* city */}

                    <Field
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "#ECC94B",
                        border: "2px solid white",
                      }}
                      autoComplete="off"
                      id="inputCreatePost"
                      name="city"
                      placeholder="New york"
                      type="text"
                    />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="city"
                      component="span"
                    />
                    <Tada>
                      <Button
                        type="submit"
                        fontFamily={"heading"}
                        mt={8}
                        w={"full"}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={"white"}
                        _hover={{
                          bgGradient: "linear(to-r, red.400,pink.400)",
                          boxShadow: "xl",
                        }}
                      >
                        <button type="submit">Continue</button>
                      </Button>
                    </Tada>
                  </Form>
                </Formik>
              </Stack>
              <Box as={"form"} mt={10}>
                <Stack spacing={4}></Stack>
              </Box>
              form
            </Stack>
          </Container>
          <Blur
            position={"absolute"}
            top={-10}
            left={-10}
            style={{ filter: "blur(70px)" }}
          />
        </Box>
      </Fade>
    </div>
  );
}

export default CreateMyEmployee;

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
