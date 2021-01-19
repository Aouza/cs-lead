import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    outline: none;
  }

  > form {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    width: 100%;
    margin: 4rem;

    > div {
      flex: 1;
      position: relative;
    }
  }

  @media (max-width: 70rem) {
    max-width: 50rem;
  }
`;

export const Pages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h2`
  width: 100%;
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.4rem;

  @media (max-width: 70rem) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

export const WrapButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;

  & > button:first-child {
    background: none;
    color: #45b34a;
    border: 2px solid #45b34a;
    box-shadow: none;
  }

  @media (max-width: 70rem) {
    flex-direction: row !important;
    justify-content: space-between !important;
  }
`;

export const WrapButtonLead = styled.div`
  > button {
    @media (max-width: 70rem) {
      width: 100%;
    }
  }
`;

export const Markdown = styled.span`
  color: #45b34a;
`;

export const ContentStepCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3rem;

  > img {
    @media (max-width: 70rem) {
      display: none;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

export const LoadingImage = styled.svg`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 2rem;

  animation: rotateSVG 0.9s;
  animation-delay: 0.5s;

  .simple-left {
    animation: leftSideIn 0.6s ease forwards, leftSideOut 1s ease 1.5s;
  }

  .simple-right {
    animation: rightSideIn 0.6s ease forwards, rightSideOut 1s ease 1.5s;
  }

  @keyframes leftSideIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(10%);
    }
  }

  @keyframes rightSideIn {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }

    100% {
      opacity: 1;
      transform: translateX(-10%);
    }
  }

  @keyframes leftSideOut {
    0% {
      opacity: 1;
      transform: translateX(10%);
    }

    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  @keyframes rightSideOut {
    0% {
      opacity: 1;
      transform: translateX(-10%);
    }

    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  @keyframes rotateSVG {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const WrapStepCalculator = styled.div`
  > button {
    @media (max-width: 70rem) {
      width: 100%;
    }
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const RadioWrap = styled.div`
  > h4 {
    margin-bottom: 0.8rem;

    @media (max-width: 70rem) {
      text-align: left;
    }
  }
`;

export const Result = styled.div`
  text-align: center;
  margin-top: 2rem;

  > span {
    font-size: 5rem;
    font-weight: bold;

    @media (max-width: 70rem) {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }

    > small {
      margin-right: 1rem;
    }
  }

  > p {
    color: #b0b0b0;
    max-width: 380px;
    margin: 1rem auto;
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;
  position: relative;
  display: flex;
  justify-content: flex-start;
`;
