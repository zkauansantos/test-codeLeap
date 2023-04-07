import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { client } from '../lib/queryClient';
import { Container } from './styles';

import Routes from '../routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={client}>
          <Container>
            <Routes />
          </Container>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
