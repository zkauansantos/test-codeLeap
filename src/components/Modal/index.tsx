import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import FormGroup from '../FormGroup';

import { ContainerDelete, ContentModal, Overlay } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { closeModal } from '../../redux/modalSlice';

export default function Modal() {
  const { visible, edit, del } = useSelector(({ modal }: RootState) => modal);
  const dispatch = useDispatch();

  if (!visible) {
    return null;
  }

  const element = document.getElementById('portal-root') as HTMLElement;

  return ReactDOM.createPortal(
    (
      <Overlay>
        <ContentModal>
          {edit && <FormGroup edit cancel onSubmit={() => {}} />}

          {del && (
          <ContainerDelete>
            <h1>Are you sure you want to delete this item ?</h1>

            <div>
              <Button label="Cancel" onAction={() => dispatch(closeModal())} background="#FFF" />
              <Button label="Delete" background="#FF5151" disabled={false} />
            </div>
          </ContainerDelete>
          )}

        </ContentModal>
      </Overlay>
    ), element,
  );
}
