import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 0.8rem;
  position: relative;

  & + div {
    margin-top: 2rem;
  }

  &:focus-within {
    border: 1px solid #46b34a;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border: 1px solid red;
    `}

  label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: #cdcdcd;
    transition: all 0.5s;
    cursor: text;

    ${({ isFilled }) =>
      isFilled &&
      css`
        top: 0%;
        font-size: 0.8rem;
        background-color: #fafafa;
        padding: 0 0.5rem;
      `}
  }

  > input {
    width: 100%;
    padding: 0 0.9rem;
    height: 4rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
    letter-spacing: 0.1rem;

    &:focus ~ label {
      top: 0%;
      font-size: 0.8rem;
      background-color: #fafafa;
      padding: 0 0.5rem;
    }
  }
`;
