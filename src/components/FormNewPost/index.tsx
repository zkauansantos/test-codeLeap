import FormGroup from '../FormGroup';
import { ContainerForm } from './styles';

export default function FormNewPost() {
  return (
    <ContainerForm>
      <header>
        <h1> What{'\'s'} on your mind?</h1>
      </header>

      <FormGroup />
    </ContainerForm>
  );
}
