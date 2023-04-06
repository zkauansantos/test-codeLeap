import styled from 'styled-components';

export const ContainerHeader = styled.header<{ height: string }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  height: 8rem;
  display: flex;
  align-items: center;
  padding-left: 38px;
  margin-bottom: 24px;

  h1 {
    font-size: ${({ theme }) => theme.fontsSizes.lg};
    color: ${({ theme }) => theme.colors.light};
  }
`;
