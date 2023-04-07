/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';
import FormGroup from '../FormGroup';
import { ContainerForm } from './styles';
import usePostMutate from '../../hooks/usePostMutate';
import { RootState } from '../../types/interfaces/RootState';
import { SubmitParameters } from '../../types/submit';

export default function FormNewPost() {
  const { name } = useSelector(({ user }: RootState) => user);
  const { mutate } = usePostMutate();

  function handleSubmit({ title, content }: SubmitParameters) {
    const body = {
      username: name,
      created_datetime: new Date().toISOString(),
      title,
      content,
    };

    mutate(body);
  }

  return (
    <ContainerForm>
      <header>
        <h1> What{'\'s'} on your mind?</h1>
      </header>

      <FormGroup edit={false} onSubmit={handleSubmit} />
    </ContainerForm>
  );
}
