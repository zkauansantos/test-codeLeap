import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 100%;
  height: 33.4rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 2.4rem;

  header {
    h1 {
      font-size: ${({ theme }) => theme.fontsSizes.xl};
    }
  }
`;
