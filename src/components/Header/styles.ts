import styled from 'styled-components';

export const ContainerHeader = styled.header<{ height: string }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 38px;
  margin-bottom: 24px;

  h1 {
    font-size: ${({ theme }) => theme.fontsSizes.lg};
    color: ${({ theme }) => theme.colors.light};
  }

  .user-actions {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    span {
      font-size: ${({ theme }) => theme.fontsSizes.sm};
      color: ${({ theme }) => theme.colors.light};
    }

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.semiLight};
      cursor: pointer;
    }
  }
`;
