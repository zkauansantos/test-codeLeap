import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { Ipost } from '../../../types/interfaces/Post';
import getMinutesSincePostCreation from '../../../utils/getMinutesSincePostCreation';
import Header from '../../Header';
import Modal from '../../Modal';
import UserActions from '../../UserActions';
import { Content, PostStyled } from './styles';
import { openModal } from '../../../redux/slices/modalSlice';

interface PostProps {
  name: string,
  post : Ipost
}

export default function Post({ post, name }: PostProps) {
  const dispatch = useDispatch();

  const handleOpenModalEdit = useCallback((postId: number) => {
    dispatch(openModal({ edit: true, del: false, postId }));
  }, []);

  const handleOpenModalDelete = useCallback((postId: number) => {
    dispatch(openModal({ edit: false, del: true, postId }));
  }, []);

  return (
    <PostStyled>
      <Header title={post.title} height="0.7rem">
        {post.username === name && (
        <UserActions>
          <BsFillTrashFill onClick={() => handleOpenModalDelete(post.id!)} />
          <BiEdit onClick={() => handleOpenModalEdit(post.id!)} />
        </UserActions>
        )}
      </Header>

      <Content>
        <div className="user">
          <span>@{post.username}</span>
          <span>{getMinutesSincePostCreation(post.created_datetime)}</span>
        </div>
        <p>{post.content}</p>
      </Content>

      <Modal />
    </PostStyled>
  );
}
