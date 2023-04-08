import { Link } from 'react-router-dom';
import { Container, Overlay } from './styles';

export default function NotFound() {
  return (
    <Overlay>
      <Container>
        <h1>Page Not Found</h1>

        <Link to="/">
          Back to home
        </Link>
      </Container>
    </Overlay>
  );
}
