import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    letter-spacing: 0.05rem;

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset;
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 50px white inset;
      -webkit-box-shadow: 0 0 0 50px white inset;
      -webkit-text-fill-color: #333;
    }

    -webkit-text-fill-color: #333 !important;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
    &:focus ~ label {
      top: 0%;
      font-size: 0.8rem;
      background-color: #fafafa;
      padding: 0 0.5rem;
    }
  }
`;
