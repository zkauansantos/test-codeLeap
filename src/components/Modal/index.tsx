import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import FormGroup from '../FormGroup';
import { ContainerDelete, ContentModal, Overlay } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { closeModal } from '../../redux/slices/modalSlice';
import usePostMutate from '../../hooks/usePostMutate';

export default function Modal() {
  const dispatch = useDispatch();
  const { postId, edit, del, visible } = useSelector((state: RootState) => state.modal);
  const { mutate } = usePostMutate();

  function handleDeletePost() {
    mutate({ postId, method: 'DELETE', message: 'Post successfully deleted' });
    dispatch(closeModal({ postId: undefined }));
  }

  function handleEditPost({ title, content }: { title: string, content: string }) {
    const body = {
      title,
      content,
    };

    mutate({ body, method: 'PATCH', postId, message: 'Post successfully edited' });
    dispatch(closeModal({}));
  }

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContentModal>
        {(edit) && <FormGroup edit cancel onSubmit={handleEditPost} />}

        {(del) && (
          <ContainerDelete>
            <h1>Are you sure you want to delete this item?</h1>

            <div>
              <Button label="Cancel" onAction={() => dispatch(closeModal({}))} background="#FFF" />
              <Button label="Delete" background="#FF5151" onAction={handleDeletePost} />
            </div>
          </ContainerDelete>
        )}
      </ContentModal>
    </Overlay>,
    document.getElementById('portal-root') as HTMLElement,
  );
}
