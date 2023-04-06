import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: calc(100vw - (100vw - 750px));
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
