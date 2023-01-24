import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Badge,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import Highlights from "./Highlights";
import Fade from "react-reveal/Fade";
import FeaturesData from "../../Data/Features/FeaturesData.json";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <Fade bottom cascade>
      {FeaturesData.map((data, key) => (
        <Container key={key} maxW={"5xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"blue.100"}
                fontWeight={600}
                fontSize={"sm"}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                <Badge> {data.tag}</Badge>
              </Text>
              <Heading style={{}}>{data.title}</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                {truncate(data.desc, 160)}
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider borderColor={("gray.100", "gray.700")} />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={("yellow.100", "yellow.900")}
                  text={data.bool1}
                />
                <Feature
                  icon={
                    <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={("green.100", "green.900")}
                  text={data.bool2}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={("purple.100", "purple.900")}
                  text={data.bool3}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={data.img}
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      ))}

      <Highlights />
    </Fade>
  );
}
