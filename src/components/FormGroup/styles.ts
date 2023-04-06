import styled from 'styled-components';

export const Form = styled.form`
  label {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: ${({ theme }) => theme.fontsSizes.md};

    input {
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      padding: 0px 8px;
      outline: none;
      height: 3.2rem;
    }

    #content {
      outline: none;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      padding: 8px 0px 0px 8px;
      font-family: 'Roboto';
      height: 7.4rem;
      max-height: 7.4rem;
      max-width: 100%;
    }
  }

  .buttons {
    width: 100%;
    margin-top: 24px ;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;
