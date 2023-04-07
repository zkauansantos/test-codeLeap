import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    background: ${({ theme }) => theme.colors.semiLight};
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    min-height: 100vh;
  }
`;
