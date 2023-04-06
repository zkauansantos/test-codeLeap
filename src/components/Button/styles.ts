import styled from 'styled-components';

export const ButtonStyled = styled.button`
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
    cursor: not-allowed;
  }
`;
