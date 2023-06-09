import styled from 'styled-components';

export const ContainerModal = styled.div`
  background: ${({ theme }) => theme.colors.light};
  min-height: 20rem;
  width: 50rem;
  border: 1px solid ${({ theme }) => theme.colors.semiLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 2.4rem;

  header {
    h1 {
      font-size: ${({ theme }) => theme.fontsSizes.xl};
      margin-bottom: 24px;
    }
  }

  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

export const ContainerInputName = styled.div`
  label {
    font-size: ${({ theme }) => theme.fontsSizes.sm};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    input {
      width: 100%;
      height: 3.2rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 8px;
      margin-bottom: 16px;
      padding: 0 8px;
    }
}
`;

export const Submit = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-text-size-adjust: 100%;
  overflow-y: hidden;
`;
