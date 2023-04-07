/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

import { Ipost } from '../../types/interfaces/Post';

import Header from '../Header';
import UserActions from '../UserActions';

import usePost from '../../hooks/usePost';
import getMinutesSincePostCreation from '../../utils/getMinutesSincePostCreation';

import { Container, Post, Content } from './styles';
import Modal from '../Modal';
import sortPosts from '../../utils/sortPosts';

export default function Posts() {
  const { data } = usePost();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const sortedPosts = sortPosts(data?.results);

  function handleOpenModalEdit() {
    setEditModal(true);
    setIsModalVisible(true);
  }

  function handleOpenModalDelete() {
    setDelModal(true);
    setIsModalVisible(true);
  }

  return (
    <Container>
      {sortedPosts?.map((post: Ipost) => (
        <Post key={post.id}>
          <Header title={post.title} height="0.7rem">
            <UserActions>
              <BsFillTrashFill onClick={handleOpenModalEdit} />
              <BiEdit onClick={handleOpenModalDelete} />
            </UserActions>
          </Header>

          <Content>
            <div className="user">
              <span>@{post.username}</span>
              <span>{getMinutesSincePostCreation(post.created_datetime)}</span>
            </div>

            <p>{post.content}</p>
          </Content>
        </Post>
      ))}

      <Modal del={delModal} edit={editModal} visible={isModalVisible} />
    </Container>
  );
}
