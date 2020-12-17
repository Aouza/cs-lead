import React, { useState } from "react";
import { Container, Form } from "./styles";
import { api } from "../../services/api";
const CalculatorPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/send", {
      name,
      email,
    });

    setName("");
    setEmail("");
    console.log("enviei");
  };

  return (
    <Container>
      <h1>Calculadora</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <br></br>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          {name}
          <br></br>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          {email}
        </div>
        <div>
          <button>ENVIAR</button>
        </div>
      </Form>
    </Container>
  );
};

export default CalculatorPage;
