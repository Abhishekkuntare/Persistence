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
  Badge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header2() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    navigate("/");
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div id="home" className="font">
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <span className="font-2">
              <Box>
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
                  <Link to="/employee">Employees</Link>
                </Text>

                <Text marginLeft={10}>
                  <Link to="/myprofile">MyProfile</Link>
                </Text>

                <Text marginLeft={10}>
                  <Link to="/about">About</Link>
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
                <Box>
                  <Button mr={2} bg={"Window"}>
                    {" "}
                    {authState.username}{" "}
                  </Button>
                  {authState.status && (
                    <Button bg={" ThreeDFace"} onClick={logout}>
                      {" "}
                      Logout
                    </Button>
                  )}
                </Box>
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
