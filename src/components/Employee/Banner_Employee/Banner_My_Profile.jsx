import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import LightSpeed from "react-reveal/LightSpeed";
import Tada from "react-reveal/Tada";
import v1 from "./v1.mp4";

export default function Banner_My_Profile() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={v1} type="video/mp4" />
      </video>
      <Box position={"absolute"} top={"10%"} left={"25%"}>
        <LightSpeed left>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              fontFamily={"Cinzel"}
              fontSize={50}
              fontWeight={900}
              className="banner_title"
              color={"white.100"}
            >
              Browse your profile details
            </Text>
            <Text
              fontFamily={"Cinzel"}
              fontSize={50}
              fontWeight={900}
              className="banner_title"
              color={"red.100"}
            >
              and create the profile
            </Text>
            <Stack direction={"row"}>
              <Tada>
                <a href="#bottom">
                  <Button
                    bg={"whiteAlpha.300"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "whiteAlpha.500" }}
                  >
                    Show me more
                  </Button>
                </a>
              </Tada>
            </Stack>
          </Stack>
        </LightSpeed>
      </Box>
      {/* <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
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
          <LightSpeed left>
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Browse your profile details and create the profile
              </Text>
              <Stack direction={"row"}>
                <Tada>
                  <a href="#bottom">
                    <Button
                      bg={"whiteAlpha.300"}
                      rounded={"full"}
                      color={"white"}
                      _hover={{ bg: "whiteAlpha.500" }}
                    >
                      Show me more
                    </Button>
                  </a>
                </Tada>
              </Stack>
            </Stack>
          </LightSpeed>
        </VStack>
      </Flex> */}
    </>
  );
}
