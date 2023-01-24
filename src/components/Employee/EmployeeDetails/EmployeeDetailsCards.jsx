import {
  Box,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

export default function EmployeeDetailsCards({
  name,
  age,
  country,
  position,
  wage,
  id,
  setNewWage,
  updateEmployeeWage,
  deleteEmployee,
}) {
  return (
    <>
      <Box
        display={"flex"}
        alignContent="center"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        margin="auto"
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          flexDirection={"row"}
          py={6}
        >
          <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Text mb={2} fontSize={"20px"}>
              Name: {name}
            </Text>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              Age: {age}
            </Text>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
              mb={3}
            >
              Country: {country}
            </Badge>

            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
              mb={3}
            >
              Role: {position}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              Salary: {wage}
            </Badge>

            <Stack mt={8} direction={"column"} spacing={4}>
              <Input
                placeholder="salary"
                onChange={(event) => {
                  setNewWage(event.target.value);
                }}
              />
              <Button
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                margin={"auto"}
                onClick={() => {
                  updateEmployeeWage(id);
                }}
              >
                Update Salary
              </Button>
              <Button
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                margin={"auto"}
                backgroundColor="red.200"
                onClick={() => {
                  deleteEmployee(id);
                }}
              >
                Delete Employee
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
