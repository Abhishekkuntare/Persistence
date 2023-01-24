import React from "react";

import { Flex, Box, chakra, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfileCom = () => {
  return (
    <Fade bottom>
      <ToastContainer />

      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        _light={{
          bg: "brand.500",
        }}
        px={8}
        py={24}
        mx="auto"
      >
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          pr={{
            md: 20,
          }}
        >
          <chakra.h2
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="#D53F8C"
            _dark={{
              color: "gray.100",
            }}
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color="#FBB6CE"
              _dark={{
                color: "gray.500",
              }}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="#805AD5"
            _dark={{
              color: "gray.300",
            }}
          >
            An employee profile provides a holistic story of each member of the
            company. For a company to perform at its best, extracting employees'
            skills to their maximum potential is essential.
          </chakra.p>
          <chakra.p
            mb={6}
            fontSize={{
              base: "sm",
              md: "sm",
            }}
            color="#FBB6CE"
            _dark={{
              color: "#FBB6CE",
            }}
          >
            Already Profile? <Link to="/">home</Link>
          </chakra.p>
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            mb={{
              base: 4,
              md: 8,
            }}
            spacing={2}
          >
            <Tada>
              <Box display="inline-flex" rounded="md" shadow="md">
                <Link to={"/createMyEmployee"}>
                  <chakra.a
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="md"
                    _light={{
                      color: "#805AD5",
                    }}
                    bg="brand.600"
                    _dark={{
                      bg: "#805AD5",
                    }}
                    _hover={{
                      border: "2px red",
                      bg: "brand.700",
                      _dark: {
                        bg: "brand.600",
                      },
                    }}
                    cursor="pointer"
                  >
                    Complete profile
                  </chakra.a>
                </Link>
              </Box>
            </Tada>
          </Stack>
        </Box>
        <Box
          w={{
            base: "full",
            md: 10 / 12,
          }}
          mx="auto"
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="https://ethereum.org/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp"
            // src="https://kutty.netlify.app/hero.jpg"
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Flex>
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        _light={{
          bg: "brand.500",
        }}
        px={8}
        py={24}
        mx="auto"
      >
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          pr={{
            md: 20,
          }}
        >
          <chakra.h2
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="#D53F8C"
            _dark={{
              color: "gray.100",
            }}
            mb={6}
          >
            <chakra.span display="block">
              Browse your Employees Profile
            </chakra.span>
            <chakra.span
              display="block"
              color="#FBB6CE"
              _dark={{
                color: "gray.500",
              }}
            ></chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="#805AD5"
            _dark={{
              color: "gray.300",
            }}
          >
            An effective employee management system should include key features,
            such as time and attendance management (e.g., time tracking by way
            of employee timesheets), absence and leave management (e.g.,
            time-off requests), an employee database, and an employee
            self-service portal.
          </chakra.p>

          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            mb={{
              base: 4,
              md: 8,
            }}
            spacing={2}
          >
            <Tada>
              <Box display="inline-flex" rounded="md" shadow="md">
                <Link to="/getEmployeeProfile">
                  <chakra.a
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="md"
                    _light={{
                      color: "#805AD5",
                    }}
                    bg="brand.600"
                    _dark={{
                      bg: "#805AD5",
                    }}
                    _hover={{
                      border: "2px red",
                      bg: "brand.700",
                      _dark: {
                        bg: "brand.600",
                      },
                    }}
                    cursor="pointer"
                  >
                    Browse Employees
                  </chakra.a>
                </Link>
              </Box>
            </Tada>
          </Stack>
        </Box>
        <Box
          w={{
            base: "full",
            md: 10 / 12,
          }}
          mx="auto"
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="https://ethereum.org/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/b3831/hackathon_transparent.webp"
            // src="https://media2.giphy.com/media/XD9o33QG9BoMis7iM4/giphy.gif?cid=fe3852a3ihg8rvipzzky5lybmdyq38fhke2tkrnshwk52c7d&rid=giphy.gif&ct=g"
            // https://saas-ui.dev/_next/image?url=%2Fscreenshots%2Fbilling.png&w=1920&q=75
            // https://saas-ui.dev/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=1920&q=75
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Flex>
    </Fade>
  );
};

export default MyProfileCom;
