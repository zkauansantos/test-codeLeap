/* eslint-disable react/jsx-no-bind */
import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePostMutate from '../../hooks/usePostMutate';

import Button from '../Button';

import { ContainerButtons, Form } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { closeModal } from '../../redux/modalSlice';

interface FormGroupProps {
  cancel?: boolean
  edit: boolean
}

export default function FormGroup({ cancel, edit }: FormGroupProps) {
  const dispatch = useDispatch();
  const { name } = useSelector(({ user }: RootState) => user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { mutate } = usePostMutate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      username: name,
      created_datetime: new Date().toISOString(),
      title,
      content,
    };

    mutate(body);
  }

  console.log({ title, content });

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
            onAction={() => dispatch(closeModal())}
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
