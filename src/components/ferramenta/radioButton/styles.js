import styled from "styled-components";

export const Container = styled.div`
  & + div {
    > label {
      margin-left: 2rem;
    }
  }

  > label {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      width: 10px;
      height: 10px;
      display: inline-block;
      background-color: #ffffff;
      border: 5px solid #eaeaea;
      border-radius: 50%;
      margin-right: 0.8rem;
    }
  }

  > input {
    margin-right: 0.5rem;
    cursor: pointer;

    &[type="radio"] {
      display: none;
    }

    &[type="radio"]:checked + label:before {
      background-color: #ffffff;
      border: 5px solid #46b34a;
    }
  }
`;
