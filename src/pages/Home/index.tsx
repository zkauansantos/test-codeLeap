import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormNewPost from '../../components/FormNewPost';
import Header from '../../components/Header';
import Posts from '../../components/Posts';

import { ContainerHome, Container } from './styles';

import { RootState } from '../../types/interfaces/RootState';

export default function Home() {
  const { isLogged } = useSelector(({ user }: RootState) => user);

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <ContainerHome>
      <Header title="CodeLeap Network" height="8rem" userActions />

      <Container>
        <FormNewPost />
        <Posts />
      </Container>
    </ContainerHome>
  );
}
