import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';

import { ContainerButtons, Form } from './styles';
import { closeModal } from '../../redux/slices/modalSlice';
import { SubmitParameters } from '../../types/submit';

interface FormGroupProps {
  cancel?: boolean,
  edit: boolean,
  onSubmit: ({ title, content }: SubmitParameters) => void
}

export default function FormGroup({ cancel, edit, onSubmit }: FormGroupProps) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          placeholder="Hello Word"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label htmlFor="content">
        Content
        <textarea
          id="content"
          placeholder="Content Here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>

      <ContainerButtons edit={edit}>
        {cancel && (
          <Button
            background="#FFF"
            onAction={() => dispatch(closeModal({}))}
            label="Cancelar"
          />
        )}

        <Button
          background={edit ? '#31992e' : '#7695EC'}
          label={edit ? 'Save' : 'Create'}
          disabled={!title || !content}
        />
      </ContainerButtons>
    </Form>
  );
}

FormGroup.defaultProps = {
  cancel: false,
};
