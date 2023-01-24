import React from "react";
import { useParams } from "react-router-dom";

const EachEmployee = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default EachEmployee;
