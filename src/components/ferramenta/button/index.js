import React from 'react';
import { Container } from './styles';
const Button = ({ children, type, onClick }) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
