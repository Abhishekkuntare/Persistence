import React, { useState } from "react";
import axios from "axios";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = () => {
    axios
      .put(
        "http://localhost:3001/auth/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log(response);
        } else {
          console.log(response);
          navigate("/");
        }
      });
  };

  return (
    <>
      <Flex
        minH={"50vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              _placeholder={{ color: "gray.500" }}
              type="password"
              placeholder="Old Password..."
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
            />

            <Input
              mt={3}
              type="password"
              placeholder="New Password..."
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <button onClick={changePassword}> Save Changes</button>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default ChangePassword;
