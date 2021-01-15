import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 2rem;
  max-width: 60rem;
  width: 100%;
  background-color: #fafafa;
  border-radius: 1rem;
  display: none;
  flex-direction: column;

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
