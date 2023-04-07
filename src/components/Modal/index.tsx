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
  const { visible, edit, del, postId } = useSelector((state: RootState) => state.modal);
  const { mutate } = usePostMutate();

  if (!visible) {
    return null;
  }

  function handleDeletePost() {
    const postBeingDeleted = postId;
    mutate({ postId: postBeingDeleted, method: 'DELETE' });
    dispatch(closeModal({ postId: undefined }));
  }

  function handleEditPost({ title, content }: { title: string, content: string }) {
    const body = {
      title,
      content,
    };

    mutate({ body, method: 'PATCH', postId: `${postId}/` });
    dispatch(closeModal({}));
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContentModal>
        {edit && <FormGroup edit cancel onSubmit={handleEditPost} />}

        {del && (
          <ContainerDelete>
            <h1>Are you sure you want to delete this item?</h1>

            <div>
              <Button label="Cancel" onAction={() => dispatch(closeModal({ postId: undefined }))} background="#FFF" />
              <Button label="Delete" background="#FF5151" onAction={handleDeletePost} />
            </div>
          </ContainerDelete>
        )}
      </ContentModal>
    </Overlay>,
    document.getElementById('portal-root') as HTMLElement,
  );
}
