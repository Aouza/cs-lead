import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const MenuItem = ({ name, url }) => {
  console.log(name);
  return (
    <Container>
      <Link to={url}>{name}</Link>
    </Container>
  );
};

export default MenuItem;
