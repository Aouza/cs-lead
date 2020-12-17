import styled from "styled-components";

export const Container = styled.main`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  > h2 {
    font-size: 2.5rem;
    padding: 6rem 0;
  }
`;

export const WrapperContentPhone = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  > img {
    width: 20rem;
    position: sticky;
    top: 20%;
  }
`;

export const Aside = styled.div`
  > p {
    font-size: 1.2rem;
    padding: 1rem 0;
    line-height: 1.2rem;
  }

  > h2 {
    font-size: 2.5rem;
    padding: 2rem 0;
  }
`;
