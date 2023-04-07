import { useSelector } from 'react-redux';

import { SubmitParameters } from '../../types/submit';
import { RootState } from '../../types/interfaces/RootState';

import FormGroup from '../FormGroup';
import usePostMutate from '../../hooks/usePostMutate';

import { ContainerForm } from './styles';

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

    mutate({ body, method: 'POST' });
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
