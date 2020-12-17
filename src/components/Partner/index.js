import React from "react";

import { Container, Header, MainContent, ContactButton } from "./styles";

import ViaContaxImage from "../../assets/img/via-contax-logo.png";

const Partner = () => {
  return (
    <Container>
      <Header>
        <div>
          <h2>Via Contax</h2>
          <img src={ViaContaxImage} alt="Logo via contax" />
        </div>
        <p>Rua Manoel da Nóbrega, 111 Conj 92 - Paraíso - São Paulo - SP</p>
      </Header>
      <MainContent>
        <p>
          A Via Contax é uma empresa de contabilidade especializada em negócios
          digitais e serviços. Eles realizam serviços como: abertura de empresa,
          escrituração tributária, entrega das obrigações acessórias, emissão de
          certidões negativas de débitos, entre outros.
        </p>
      </MainContent>
      <ContactButton>ENTRE EM CONTATO</ContactButton>
    </Container>
  );
};

export default Partner;
