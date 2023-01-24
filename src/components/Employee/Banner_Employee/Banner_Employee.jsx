import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Bounce from "react-reveal/Bounce";
import Tada from "react-reveal/Tada";
import v from "./v.mp4";

export default function Banner_Employee() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={v} type="video/mp4" />
      </video>
      <Box position={"absolute"} top={"12%"} left={"25%"}>
        <Bounce left>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              fontFamily={"Cinzel"}
              fontSize={50}
              fontWeight={900}
              className="banner_title"
              color={"white.100"}
              lineHeight={10}
            >
              For employees to
            </Text>
            <Text
              fontFamily={"Cinzel"}
              fontSize={50}
              fontWeight={900}
              className="banner_title"
              color={"blue.100"}
            >
              manage employee details
            </Text>
            <Stack direction={"row"}>
              <a href="#bottom">
                <Tada>
                  <Button
                    bg={"gray.300"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "whiteAlpha.500" }}
                  >
                    Show me more
                  </Button>
                </Tada>
              </a>
            </Stack>
          </Stack>
        </Bounce>
      </Box>
      {/* <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Bounce left>
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                One for employers to manage employee details
              </Text>
              <Stack direction={"row"}>
                <a href="#bottom">
                  <Tada>
                    <Button
                      bg={"whiteAlpha.300"}
                      rounded={"full"}
                      color={"white"}
                      _hover={{ bg: "whiteAlpha.500" }}
                    >
                      Show me more
                    </Button>
                  </Tada>
                </a>
              </Stack>
            </Stack>
          </Bounce>
        </VStack>
      </Flex> */}
    </>
  );
}
