import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  Flex,
  Box,
  Image,
  Icon,
  chakra,
  Text,
  Badge,
  Highlight,
  Button,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const GetMyEmployeeProfile = () => {
  const [listofusers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/myprofile").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  return (
    <Fade top cascade>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {listofusers.map((value, key) => {
          return (
            <div>
              <Flex
                p={50}
                w="full"
                flexDirection={"row"}
                alignItems="center"
                justifyContent="center"
                flexWrap={"wrap"}
              >
                <Box
                  w="sm"
                  mx="auto"
                  bg="white"
                  _dark={{
                    bg: "gray.800",
                  }}
                  shadow="lg"
                  rounded="lg"
                  overflow="hidden"
                >
                  <Image
                    w="full"
                    h={56}
                    fit="cover"
                    objectPosition="center"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />

                  <Flex
                    alignItems="center"
                    px={6}
                    py={3}
                    bg="gray.900"
                    align={"center"}
                    justify={"center"}
                  >
                    <Badge variant={"outline"} fontSize={14}>
                      {value.userName}
                    </Badge>
                  </Flex>

                  <Box
                    py={4}
                    px={6}
                    flexDir={"column"}
                    display={"flex  "}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Flex>
                      <Button
                        background={"transparent"}
                        border={"1px solid gray"}
                        cursor={"none"}
                      >
                        Role: {value.designation}
                      </Button>
                    </Flex>

                    <Flex
                      alignItems="center"
                      mt={4}
                      color="gray.700"
                      _dark={{
                        color: "gray.200",
                      }}
                    >
                      <Button
                        background={"transparent"}
                        border={"1px solid gray"}
                        cursor={"none"}
                      >
                        Salary: {value.salary}
                      </Button>
                    </Flex>

                    <Flex
                      alignItems="center"
                      mt={4}
                      mb={4}
                      color="gray.700"
                      _dark={{
                        color: "gray.200",
                      }}
                    >
                      <Button
                        background={"transparent"}
                        border={"1px solid gray"}
                        cursor={"none"}
                      >
                        Gender : {value.gender}
                      </Button>
                    </Flex>

                    <Flex mb={4}>
                      <Button
                        background={"transparent"}
                        border={"1px solid gray"}
                        cursor={"none"}
                      >
                        City: {value.city}
                      </Button>
                    </Flex>

                    <Flex>
                      <Button
                        background={"transparent"}
                        border={"1px solid gray"}
                        cursor={"none"}
                      >
                        Department: {value.departmentName}
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default GetMyEmployeeProfile;
