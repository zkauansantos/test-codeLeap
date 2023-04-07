/* eslint-disable react/jsx-no-bind */

import { useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { Ipost } from '../../types/interfaces/Post';

import Header from '../Header';
import UserActions from '../UserActions';

import usePost from '../../hooks/usePost';
import getMinutesSincePostCreation from '../../utils/getMinutesSincePostCreation';

import { Container, Post, Content } from './styles';
import Modal from '../Modal';
import { openModal } from '../../redux/slices/modalSlice';
import { RootState } from '../../types/interfaces/RootState';
import { updatePosts } from '../../redux/slices/postsSlice';
import sortPosts from '../../utils/sortPosts';

export default function Posts() {
  const { data } = usePost();
  const { name } = useSelector(({ user }: RootState) => user);
  const { arrPosts } = useSelector(({ posts }: any) => posts);
  const dispatch = useDispatch();

  function handleOpenModalEdit(postId: number) {
    dispatch(openModal({ edit: true, del: false, postId }));
  }

  function handleOpenModalDelete(postId: number) {
    dispatch(openModal({ edit: false, del: true, postId }));
  }

  useEffect(() => {
    dispatch(updatePosts(data?.results));
  }, [data]);

  const sortedPosts = sortPosts(arrPosts);

  return (
    <Container>
      {sortedPosts?.map((post: Ipost) => (
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
