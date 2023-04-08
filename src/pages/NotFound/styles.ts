import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  width: 80%;
  max-width: 66rem;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontsSizes.xl};
    margin-bottom: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontsSizes.md};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background:  ${({ theme }) => theme.colors.lightBlue};
    padding: 1rem 2rem;
    border-radius: 4px;

    &:hover {
      opacity: 0.7;
    }
  }


  @media screen and (max-width: 525px){
    width: 95%;
  }
`;
