import React, { useContext } from "react";
import { GlobalContext } from "../../../hooks/GlobalContext";
import { Container, Progress } from "./styles";

const ProgressBar = () => {
  const { progressBar } = useContext(GlobalContext);

  return (
    <Container>
      <Progress progressBar={progressBar}></Progress>
    </Container>
  );
};

export default ProgressBar;
