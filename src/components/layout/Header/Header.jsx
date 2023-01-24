import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import "../../../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div id="home" className="font">
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <span className="font-2">
              <Box fontFamily={"Cinzel"}>
                <Link style={{ fontFamily: "Cinzel" }} to="/">
                  Persistence
                </Link>
              </Box>
            </span>
            <div className="header_links">
              <Box
                flexDirection={"row"}
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text marginLeft={10}>
                  <Link to="/">Home</Link>
                </Text>

                <Text marginLeft={10}>
                  <Link to="/login">Login</Link>
                </Text>

                <Text marginLeft={10}>
                  <Link to="/registration">Registration</Link>
                </Text>
              </Box>
            </div>

            <Flex alignItems={"center"}>
              <Stack
                direction={"row"}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={7}
              >
                <Text>EN</Text>

                <Button width={10} onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    width={30}
                  >
                    <div className="header_burger">
                      <HamburgerIcon />
                    </div>
                  </MenuButton>
                  <MenuList alignContent={"center"}>
                    <MenuDivider />
                    <MenuItem>
                      <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/employee">Employee </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/login">Login</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/signUp">SignUp</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/About">About</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </div>
    </>
  );
}
