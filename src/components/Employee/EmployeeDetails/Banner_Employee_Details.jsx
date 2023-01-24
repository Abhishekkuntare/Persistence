import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Banner_Employee_Details() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
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
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            The information about the personal details
          </Text>
          <Stack direction={"row"}>
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
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
