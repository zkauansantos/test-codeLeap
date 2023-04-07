import styled from 'styled-components';

export const ContainerHome = styled.main`
  width: 80rem;
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 800px){
    width: 100%;
  }
`;

export const Container = styled.div`
  padding: 0px 24px;
  width: 100%;
`;
