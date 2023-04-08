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

    @media screen and (-webkit-min-device-pixel-ratio:0) {
      select:focus,
      textarea:focus,
      input:focus {
        font-size: ${({ theme }) => theme.fontsSizes.sm};
      }
    }
  }
`;
