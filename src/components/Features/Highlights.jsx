import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Fade from "react-reveal/Fade";

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function Highlights() {
  return (
    <Fade bottom>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Employee Information</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Secure employee information pertaining to every department,
            designation, location, etc. in a single location. Set permissions to
            allow your HR team and employees to access and edit relevant data
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Fade>
  );
}
