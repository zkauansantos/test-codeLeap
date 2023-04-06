import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Routes from '../routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
