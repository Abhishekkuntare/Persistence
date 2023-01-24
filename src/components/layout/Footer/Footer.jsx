import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaGithub,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import TopToBottom from "../../TopToBottom/TopToBottom";
import Fade from "react-reveal/Fade";

import Tada from "react-reveal/Tada";

const Footer = () => (
  <Fade bottom>
    <div className="footer_font">
      <Container as="footer" role="contentinfo">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "12", md: "16" }}
        >
          <Stack
            direction={{ base: "column-reverse", md: "column", lg: "row" }}
            spacing={{ base: "12", md: "8" }}
          >
            <Stack direction="row" spacing="8">
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Employee
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Link to="/feedback">
                    <Button variant="link">Feedback</Button>
                  </Link>
                  <a href="#">
                    {" "}
                    <Link to="/pricing">
                      <Button variant="link">Pricing</Button>
                    </Link>
                  </a>
                  <Link to="/usecase">
                    <Button variant="link">Use Cases</Button>
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Legal
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">Privacy</Button>
                  <Button variant="link">Terms</Button>
                  <Button variant="link">License</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Stay up to date
              </Text>
              <Stack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                maxW={{ lg: "360px" }}
              >
                <Input
                  width={200}
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Tada>
                  <Link to="/login">
                    <Button type="submit">Subscribe</Button>
                  </Link>
                </Tada>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Persistence, Inc. All rights
            reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/abhishek__kuntare/"
              aria-label="GitHub"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
      <TopToBottom />
    </div>
  </Fade>
);
export default Footer;
