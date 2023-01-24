import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history("/");
      }
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
            <Heading fontSize={"4xl"}>Login to access Account</Heading>
            <Text fontSize={"lg"} color={"gray.400"}>
              New user?{"  "}
              <Link style={{ color: "#C4A8F1" }} to="/registration">
                Create an account
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
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  type="email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  onClick={login}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Fade>
  );
}
