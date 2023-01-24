import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Badge,
  FormLabel,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

function Employee_Details() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const { authState } = useContext(AuthContext);
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    } else {
      axios
        .get("http://localhost:3001/posts", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfPosts(response.data.listOfPosts);
          setLikedPosts(
            response.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, []);

  const likeAPost = (postId) => {
    axios
      .post(
        "http://localhost:3001/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setListOfPosts(
          listOfPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );

        if (likedPosts.includes(postId)) {
          setLikedPosts(
            likedPosts.filter((id) => {
              return id != postId;
            })
          );
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
      });
  };

  return (
    <Fade top>
      <Center>
        {" "}
        <Box py={4}>
          <Heading as="h1" fontSize="4xl">
            Employees Details
          </Heading>
        </Box>
      </Center>
      <Box
        display={"flex"}
        flexDir="row"
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {listOfPosts.map((value, key) => {
          return (
            <Center py={6}>
              <Box
                marginRight={"20px"}
                maxW={"320px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Stack textAlign={"center"} p={6} align={"center"}>
                  <Text
                    fontSize={"sm"}
                    fontWeight={500}
                    p={2}
                    px={3}
                    color={"green.500"}
                    rounded={"full"}
                  >
                    {value.username}{" "}
                  </Text>

                  <Avatar
                    size={"xl"}
                    alt={"Avatar Alt"}
                    mb={4}
                    pos={"relative"}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: "green.300",
                      border: "2px solid white",
                      rounded: "full",
                      pos: "absolute",
                      bottom: 0,
                      right: 3,
                    }}
                  />
                  <Stack direction={"row"} align={"center"} justify={"center"}>
                    <Text fontSize={"6xl"} fontWeight={800}>
                      <Text> {value.Likes.length}</Text>
                    </Text>
                    <Text color={"gray.500"}>/likes</Text>
                  </Stack>
                  <Stack mt={8} direction={"row"} spacing={4}>
                    <Button
                      onClick={() => {
                        likeAPost(value.id);
                      }}
                      flex={1}
                      fontSize={"sm"}
                      borderRadius="full"
                      _focus={{
                        bg: "red.200",
                      }}
                    >
                      <AiFillHeart color="red" />
                    </Button>
                  </Stack>
                </Stack>

                <Box px={6} py={10}>
                  <List spacing={3}>
                    <div key={key}>
                      <Badge
                        variant={"outline"}
                        borderRadius={"6px"}
                        colorScheme="cyan"
                      >
                        email{" "}
                      </Badge>
                      <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {value.title}
                      </Heading>

                      {/* <Text
                        onClick={() => {
                          history.push(`/post/${value.id}`);
                        }}
                      >
                        {value.postText}
                      </Text> */}
                      <Tada>
                        <Link to={`/profile/${value.UserId}`}>
                          <Button
                            mt={10}
                            w={"full"}
                            bg={"green.400"}
                            color={"white"}
                            rounded={"xl"}
                            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                            _hover={{
                              bg: "green.200",
                            }}
                            _focus={{
                              bg: "green.900",
                            }}
                          >
                            Profile
                          </Button>
                        </Link>
                      </Tada>
                    </div>
                  </List>
                </Box>
              </Box>
            </Center>
          );
        })}
      </Box>
    </Fade>
  );
}

export default Employee_Details;
