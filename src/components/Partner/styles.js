import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #ffffff;
  box-shadow: 3px 3px 20px rgb(94 94 94 / 10%);
  filter: grayscale(1);
  opacity: 0.8;
  transition: all 0.6s;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
    box-shadow: 5px 5px 30px rgb(94 94 94 / 20%);
    transform: scale(1.01);
  }
`;

export const Header = styled.header`
  > div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    padding-bottom: 0.6rem;

    h2 {
      font-size: 1rem;
    }

    img {
      width: 8rem;
    }
  }

  > p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #aeaeae;
    line-height: 1.4rem;
  }

  &::after {
    content: "";
    margin: 1.5rem auto 0 auto;
    width: 100%;
    height: 2px;
    background: #ededed;
    display: block;
  }
`;

export const MainContent = styled.main`
  padding: 2rem 0;
  p {
    line-height: 1.6rem;
    color: #333333;
    font-size: 0.9rem;
  }
`;

export const ContactButton = styled.button`
  border: 0;
  outline: none;
  padding: 1rem;
  background: #45b34a;
  color: #fff;
  width: 100%;
  border-radius: 0.2rem;
  box-shadow: 4px 9px 20px #45b34a5c;

  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.09rem;
  cursor: pointer;

  transition: background-color 0.6s;

  &:hover,
  &:focus {
    background-color: #7be115;
  }
`;
