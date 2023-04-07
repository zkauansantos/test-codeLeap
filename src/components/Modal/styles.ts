import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentModal = styled.div`
  background: ${({ theme }) => theme.colors.light};
  height: fit-content;
  min-width: 66rem;
  padding: 24px;
  border-radius: 8px;
`;
