import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import Fade from "react-reveal/Fade";
import { AiFillDelete } from "react-icons/ai";

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

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = useContext(AuthContext);

  let history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.username,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        );
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        history("/");
      });
  };

  const editPost = (option) => {
    if (option === "title") {
      let newTitle = prompt("Enter New Title:");
      axios.put(
        "http://localhost:3001/posts/title",
        {
          newTitle: newTitle,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      );

      setPostObject({ ...postObject, title: newTitle });
    } else {
      let newPostText = prompt("Enter New Text:");
      axios.put(
        "http://localhost:3001/posts/postText",
        {
          newText: newPostText,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      );

      setPostObject({ ...postObject, postText: newPostText });
    }
  };

  return (
    <Fade top>
      <Flex mt={30} justifyContent={"center"} fontWeight="500" fontSize="2xl">
        <Heading>Profile </Heading>
      </Flex>
      <Flex
        minH={"40vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
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
          <Flex justifyContent={"center"}>
            <Text>Email: {postObject.title}</Text>
          </Flex>
          <Button
            onClick={() => {
              if (authState.username === postObject.username) {
                editPost("title");
              }
            }}
          >
            Update Email
          </Button>{" "}
          <Flex justifyContent={"center"}>
            <Text>Password: {postObject.postText}</Text>
          </Flex>
          <Button
            onClick={() => {
              if (authState.username === postObject.username) {
                editPost("body");
              }
            }}
          >
            Update Password
          </Button>
          <FormControl id="email">
            <Input
              _placeholder={{ color: "gray.500" }}
              type="email"
              placeholder="Bio..."
              autoComplete="off"
              value={newComment}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={addComment}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Add
            </Button>
          </Stack>
          <div className="listOfComments">
            {comments.map((comment, key) => {
              return (
                <div key={key} className="comment">
                  Bio: {comment.commentBody}
                  <Flex>
                    Username:
                    <Text ml={2} fontFamily={"Julee"}>
                      {comment.username}
                    </Text>
                  </Flex>
                  {authState.username === comment.username && (
                    <Button
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                      flex={1}
                      fontSize={"sm"}
                      borderRadius="full"
                      _focus={{
                        bg: "red.200",
                      }}
                    >
                      <AiFillDelete color="red" />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
          <Flex justifyContent={"center"} alignItems="center">
            <Text mr={"3"}> {postObject.title}</Text>
            {/* {authState.username === postObject.username && ( */}
            <Button
              _hover={{ bg: "red.600" }}
              _focus={{
                bg: "green.100",
              }}
              bg={"red.400"}
              onClick={() => {
                deletePost(postObject.id);
              }}
            >
              {" "}
              Delete Account
            </Button>
            {/* )} */}
          </Flex>
        </Stack>
      </Flex>
    </Fade>
  );
}

export default Post;
