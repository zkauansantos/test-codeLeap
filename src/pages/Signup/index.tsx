import Button from '../../components/Button';
import { ContainerModal, ContainerInputName, Submit } from './styles';

export default function SignupModal() {
  return (
    <ContainerModal>
      <header>
        <h1>Welcome to CodeLeap network!</h1>
      </header>

      <ContainerInputName>
        <label htmlFor="name">Please enter your username
          <input type="text" id="name" />
        </label>
      </ContainerInputName>

      <Submit>
        <Button label="Enter" />
      </Submit>
    </ContainerModal>
  );
}
