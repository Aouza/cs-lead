import React from "react";
import { Container, WrapperPartners } from "./styles";
import Partner from "../../components/Partner";

const Partners = () => {
  return (
    <Container>
      <h1>Partners</h1>

      <WrapperPartners>
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
      </WrapperPartners>
    </Container>
  );
};

export default Partners;
