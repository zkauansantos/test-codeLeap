/* eslint-disable react/jsx-no-bind */
import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import usePostMutate from '../../hooks/usePostMutate';

import Button from '../Button';

import { Form } from './styles';
import { RootState } from '../../types/interfaces/RootState';

interface FormGroupProps {
  cancel?: boolean
}

export default function FormGroup({ cancel }: FormGroupProps) {
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

      <div className="buttons">
        {cancel && (
          <Button
            label="Cancelar"
            disabled={false}
          />
        )}

        <Button
          label="Create"
          disabled={!title || !content}
        />
      </div>
    </Form>
  );
}

FormGroup.defaultProps = {
  cancel: false,
};
