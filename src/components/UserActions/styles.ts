import styled from 'styled-components';

export const ContainerActions = styled.div`
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
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;

  }
`;
