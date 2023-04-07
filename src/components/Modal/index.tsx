import ReactDOM from 'react-dom';
import FormGroup from '../FormGroup';

import { ContentModal, Overlay } from './styles';

interface ModalProps {
  edit: boolean,
  del: boolean,
  visible: boolean
}

export default function Modal({ edit, del, visible }: ModalProps) {
  if (!visible) {
    return null;
  }

  const element = document.getElementById('portal-root');

  return ReactDOM.createPortal(
    (
      <Overlay>
        <ContentModal>
          {edit && <FormGroup cancel />}
          {del && (
          <h1>Delete</h1>
          )}
        </ContentModal>
      </Overlay>
    ), element!,
  );
}
