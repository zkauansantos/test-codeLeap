import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header<{ height: string, actions: boolean | undefined }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.8rem;
  margin-bottom: 24px;

  h1 {
    font-size: ${({ theme }) => theme.fontsSizes.lg};
    color: ${({ theme }) => theme.colors.light};
  }

  @media screen and (max-width: 425px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 340px) {
    ${({ actions }) => actions && css`
      padding: 2em ;
      flex-direction: column;
    `}
  }
`;
