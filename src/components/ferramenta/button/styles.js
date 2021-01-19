import styled from 'styled-components';

export const Container = styled.button`
  color: #ffffff;
  padding: 0.8rem 3rem;
  background: #46b34a;
  border-radius: 0.3rem;
  margin-top: 3rem;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  box-shadow: 5px 5px 10px #46b34a4f;

  @media (max-width: 70rem) {
    padding: 0.8rem 1.6rem;
    margin-top: 2rem;
  }
`;
