import styled from 'styled-components';

export const ContainerModal = styled.div`
  background: ${({ theme }) => theme.colors.light};
  height: 20rem;
  width: 50rem;
  border: 1px solid ${({ theme }) => theme.colors.semiLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 2.4rem;

  header {
    h1 {
      font-size: ${({ theme }) => theme.fontsSizes.lg};
      margin-bottom: 24px;
    }
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

  button {
    background: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.light};
    width: 11.1rem;
    height: 3.2rem;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.gray};
    }
  }
`;
