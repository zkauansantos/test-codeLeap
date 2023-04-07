import FormNewPost from '../../components/FormNewPost';
import Header from '../../components/Header';
import Posts from '../../components/Posts';

import { ContainerHome, Container } from './styles';

export default function Home() {
  return (
    <ContainerHome>
      <Header title="CodeLeap Network" height="8rem" />

      <Container>
        <FormNewPost />
        <Posts />
      </Container>
    </ContainerHome>
  );
}
