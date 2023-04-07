import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import FormGroup from '../FormGroup';

import { ContainerDelete, ContentModal, Overlay } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { closeModal } from '../../redux/slices/modalSlice';
import { updatePosts } from '../../redux/slices/postsSlice';

export default function Modal() {
  const dispatch = useDispatch();
  const {
    visible, edit, del, postId,
  } = useSelector((state: RootState) => state.modal);
  const { arrPosts } = useSelector((state: RootState) => state.posts);

  if (!visible) {
    return null;
  }

  function handleDeleteContact() {
    const newListPosts = arrPosts?.filter(
      (post) => (post.id !== postId),
    );
    dispatch(updatePosts(newListPosts));
    dispatch(closeModal({ postId: undefined }));
  }

  return (
    ReactDOM.createPortal(
      <Overlay>
        <ContentModal>
          {edit && <FormGroup edit cancel onSubmit={() => {}} />}

          {del && (
            <ContainerDelete>
              <h1>Are you sure you want to delete this item ?</h1>

              <div>
                <Button label="Cancel" onAction={() => dispatch(closeModal({ postId: undefined }))} background="#FFF" />
                <Button label="Delete" background="#FF5151" onAction={handleDeleteContact} />
              </div>
            </ContainerDelete>
          )}
        </ContentModal>
      </Overlay>,
      document.getElementById('portal-root') as HTMLElement,
    )
  );
}
