import Button from '../Button';
import { Form } from './styles';

interface FormGroupProps {
  edit?: boolean
  onSubmit?: () => void
}

export default function FormGroup({ edit, onSubmit }: FormGroupProps) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" id="title" placeholder="Hello Word" />
      </label>

      <label htmlFor="content">
        Content
        <textarea id="content" placeholder="Content Here" />
      </label>

      <div className="buttons">
        {edit && <Button label="Create" disabled />}
        <Button label="Create" disabled />
      </div>
    </Form>
  );
}

FormGroup.defaultProps = {
  edit: false,
  onSubmit: () => {},
};
