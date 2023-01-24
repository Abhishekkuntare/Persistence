import React from "react";
import { Stack, Text, Button, Flex, Input } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";
import { useState } from "react";
import { toggle } from "../features/cookie";
import { useDispatch, useSelector } from "react-redux";

export default function Cookies() {
  const [cookies, setCookies] = useState("");
  const dispatch = useDispatch();
  const cookieSave = useSelector((state) => state.cookie.value);

  return (
    <Flex
      style={{ display: cookieSave }}
      align={"center"}
      justify={"center"}
      position={"fixed"}
      bottom={0}
      right={0}
      left={0}
    >
      <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">Your Privacy</Text>
          <FcLock />
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
            We use cookies and similar technologies to help personalise content,
            tailor and measure ads, and provide a better experience. By clicking
            OK or turning an option on in Cookie Preferences, you agree to this,
            as outlined in our Cookie Policy. To change preferences or withdraw
            consent, please update your Cookie Preferences.
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Input
              type="text"
              onChange={(e) => setCookies(e.target.value)}
              placeholder="enter none to save"
            />
            <Button
              colorScheme="green"
              onClick={() => dispatch(toggle(cookies))}
            >
              OK
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}
