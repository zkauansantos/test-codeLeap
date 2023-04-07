import { useEffect, useCallback } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import UserActions from '../UserActions';
import usePost from '../../hooks/usePost';
import getMinutesSincePostCreation from '../../utils/getMinutesSincePostCreation';
import Modal from '../Modal';

import { Container, Post, Content } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { openModal } from '../../redux/slices/modalSlice';
import { updatePosts } from '../../redux/slices/postsSlice';
import sortPosts from '../../utils/sortPosts';

export default function Posts() {
  const { data } = usePost();
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);
  const { arrPosts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (data?.results) {
      dispatch(updatePosts(data?.results));
    }
  }, [data]);

  const sortedPosts = sortPosts(arrPosts);

  const handleOpenModalEdit = useCallback((postId: number) => {
    dispatch(openModal({ edit: true, del: false, postId }));
  }, []);

  const handleOpenModalDelete = useCallback((postId: number) => {
    dispatch(openModal({ edit: false, del: true, postId }));
  }, []);

  return (
    <Container>
      {sortedPosts?.map((post) => (
        <Post key={post.id}>
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
        </Post>
      ))}
    </Container>
  );
}
