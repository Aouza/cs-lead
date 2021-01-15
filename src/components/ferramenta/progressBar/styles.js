import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  background-color: #eaeaea;
  border-radius: 0.3rem;
  position: relative;
  width: 100%;
  height: 0.5rem;
  margin-bottom: 4rem;
  transition: all 1s;
`;

export const Progress = styled.div`
  width: 0;
  background-color: #45b34a;
  width: ${({ progressBar }) => progressBar + '%'};
  transition: all 1s;
  height: 100%;
  position: absolute;
  border-radius: 0.3rem;
`;
