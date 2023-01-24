import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import v1 from "./v1.mp4";
import Flash from "react-reveal/Flash";

export default function About_Banner() {
  return (
    <>
      <Flash>
        <Text
          position={"absolute"}
          top={"30%"}
          left={"36%"}
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          We are the Persistence !
        </Text>
      </Flash>
      <video autoPlay loop muted>
        <source src={v1} type="video/mp4" />
      </video>
    </>
  );
}
