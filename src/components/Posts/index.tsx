import { Ipost } from '../../types/interfaces/Post';

import Header from '../Header';
import usePost from '../../hooks/usePost';

import { Container, Post, Content } from './styles';

export default function Posts() {
  const { data } = usePost();

  return (
    <Container>
      {data?.results.map((post: Ipost) => (
        <Post key={post.id}>
          <Header title={post.title} height="0.7rem" />

          <Content>
            <div className="user">
              <span>@{post.username}</span>
              <span>{post.created_datetime}</span>
            </div>

            <div className="paragraph">
              <p>{post.content}</p>
            </div>
          </Content>
        </Post>
      ))}
    </Container>
  );
}
