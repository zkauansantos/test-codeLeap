import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.bg};
  }
`;
