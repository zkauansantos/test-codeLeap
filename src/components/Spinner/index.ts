import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.semiLight};
  border-top: 5px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 50%;
  margin: 6rem auto;
  width: 5rem;
  height: 5rem;
  animation: ${spinAnimation} 1s linear infinite;
`;
