import styled from 'styled-components';

export const Container = styled.main`
  max-width: 80rem;
  width: calc(100vw - (100vw - 800px));
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
