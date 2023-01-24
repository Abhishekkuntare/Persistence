import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const TopToBottom = () => {
  return (
    <a href="#home" style={{ zIndex: 10000 }}>
      <Button
        zIndex={100000}
        float={"left"}
        marginLeft={"6"}
        marginBottom={"3"}
      >
        {" "}
        <ArrowUpIcon />
      </Button>
    </a>
  );
};

export default TopToBottom;
