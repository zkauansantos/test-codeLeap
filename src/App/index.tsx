import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Codeleap!</h1>
    </ThemeProvider>
  );
}
