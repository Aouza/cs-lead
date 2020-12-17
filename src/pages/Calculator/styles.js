import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  max-width: 550px;
  width: 100%;
  margin: 4rem;

  > div {
    flex: 1;
    position: relative;

    label {
      position: absolute;
      top: -22px;
      left: 10px;
      background: #fff;
      transition: top, left, 0.4s;
      font-size: 0.8rem;
      color: #aeaeae;
    }

    input {
      padding: 0.8rem 1rem;
      border: 1px solid #eaeaea;
      box-shadow: 3px 3px 5px rgb(230 230 230 / 10%);
      border-radius: 0.2rem;
      color: #333;
      font-weight: bold;
      font-size: 0.7rem;
      letter-spacing: 0.04rem;
      outline: none;
      transition: border 0.6s;

      &:focus,
      &:hover {
        border: 1px solid #d1d1d1;
      }
    }

    button {
      padding: 0.8rem 1.4rem;
      border: 1px solid #46b34a;
      background: none;
      background: #46b34a;
      color: #fff;
      font-size: 0.7rem;
      font-weight: bold;
      border-radius: 0.2rem;
      letter-spacing: 0.1rem;
      cursor: pointer;
      box-shadow: 3px 3px 10px #46b34a42;
      transition: background-color 0.6s;
      outline: none;

      &:focus,
      &:hover {
        background-color: #73bf75;
      }
    }
  }
`;
