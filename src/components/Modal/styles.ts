import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentModal = styled.div`
  background: ${({ theme }) => theme.colors.light};
  height: fit-content;
  min-width: 66rem;
  padding: 24px;
  border-radius: 8px;
`;

export const ContainerDelete = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${({ theme }) => theme.fontsSizes.xl};
  }

  div {
    margin-top: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: center;

    button {
      border: 1px solid ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
    }

    button:nth-child(2){
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;
