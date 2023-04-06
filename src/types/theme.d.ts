import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string,
      text: string,
      bg: string,
      semiLight: string,
      gray: string,
      lightBlue: string,
    },
    fontsSizes: {
      sm: string,
      md: string,
      lg: string,
      xl: string
    }
  }
}
