import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }

  .Toastify__toast {
    background-color:  ${({ theme }) => theme.colors.light};

  }
  .Toastify__toast-body {
    font-size: ${({ theme }) => theme.fontsSizes.lg};
    gap: 16px;
  }
  .Toastify__progress-bar {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;
