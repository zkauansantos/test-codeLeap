import styled, { css } from 'styled-components';

export const Form = styled.form`
  h1 {
      font-size: ${({ theme }) => theme.fontsSizes.xl};
    }

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
`;

export const ContainerButtons = styled.div<{ edit: boolean }>`
    ${({ edit, theme }) => edit && css`
      button:first-child {
        border: 1px solid ${theme.colors.gray};
        color: ${theme.colors.text};
      }
    `}
    width: 100%;
    margin-top: 24px ;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
`;
