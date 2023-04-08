import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { client } from '../lib/queryClient';
import { Container, StyledToastContainer } from './styles';
import 'react-toastify/dist/ReactToastify.css';

import store from '../redux/store/store';

import Routes from '../routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={client}>
          <Container>
            <Provider store={store}>
              <StyledToastContainer position="bottom-center" />
              <Routes />
            </Provider>
          </Container>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
