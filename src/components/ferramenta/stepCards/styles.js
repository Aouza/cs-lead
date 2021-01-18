import styled from 'styled-components';

export const Container = styled.section`
  padding: 3rem;
  max-width: 60rem;
  height: 572px;
  width: 100%;
  background-color: #fafafa;
  border-radius: 1rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: -15px 20px 0 #ffffffab, -28px 34px 0 #ffffff59;

  @keyframes slideUp {
    to {
      transform: translateY(0%);
      opacity: 1;
    }

    from {
      transform: translateY(5%);
      opacity: 0;
    }
  }

  animation: slideUp 0.5s ease;

  @media (max-width: 70rem) {
    padding: 5rem 1rem;
    height: initial;
    box-shadow: none;

    &:first-child {
      > div {
        > img {
          max-width: 300px;
          width: 100%;
        }
      }
    }
    &:last-child {
      > div:last-of-type {
        flex-direction: column !important;
      }
    }
  }

  > div {
    > div {
      @media (max-width: 70rem) {
        text-align: center;
      }
    }

    @media (max-width: 70rem) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
