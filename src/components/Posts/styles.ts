import styled from 'styled-components';

export const Container = styled.div`
  header {
    border-radius: 8px 8px 0px 0px;
  }
`;

export const Post = styled.div`
  width: 100%;
  height: 33.4rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-top: 24px;
`;

export const Content = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: ${({ theme }) => theme.fontsSizes.md};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.gray};
    }

    span:nth-child(2) {
      font-weight: 400;
    }
  }

  .paragraph{
    margin-top: 16px;
    width: 100%;
    text-align: flex-start;

    p {
      font-size: ${({ theme }) => theme.fontsSizes.md};
    }
  }
`;
