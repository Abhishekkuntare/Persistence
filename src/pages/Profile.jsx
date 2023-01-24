import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import Tada from "react-reveal/Tada";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Profile() {
  let { id } = useParams();
  let history = useNavigate();
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
      setUsername(response.data.username);
    });

    axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <Fade top>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Account Details
          </Heading>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <HStack justifyContent="center">
                <Text fontSize="3xl" color="gray.500">
                  Username:
                </Text>
                <Text fontSize="3xl" fontWeight="600">
                  <h1> {username} </h1>
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <div className="listOfPosts">
                {listOfPosts.map((value, key) => {
                  return (
                    <div key={key} className="post">
                      <Flex
                        alignItems={"center"}
                        justifyContent="center"
                        className="title"
                      >
                        <Text mr={2}>Email: </Text>
                        {value.title}
                      </Flex>

                      <Box className="buttons">
                        <Text>Likes: {value.Likes.length}</Text>
                      </Box>

                      {/* {authState.username === username && ( */}
                      <Button
                        mt={2}
                        onClick={() => {
                          history("/changepassword");
                        }}
                      >
                        Change Password
                      </Button>
                      {/* )} */}

                      <Tada>
                        <Box
                          onClick={() => {
                            history(`/post/${value.id}`);
                          }}
                          w="100%"
                          pt={7}
                        >
                          <Button w="full" colorScheme="red" variant="outline">
                            Update Profile
                          </Button>
                        </Box>
                      </Tada>
                    </div>
                  );
                })}
              </div>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
    </Fade>
  );
}

export default Profile;

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
