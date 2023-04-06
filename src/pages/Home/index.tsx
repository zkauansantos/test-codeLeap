import FormNewPost from '../../components/FormNewPost';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header title="CodeLeap Network" height="8rem" />

      <FormNewPost />
    </Container>
  );
}
