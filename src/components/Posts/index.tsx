import { Ipost } from '../../types/interfaces/Post';

import Header from '../Header';
import usePost from '../../hooks/usePost';

import { Container, Post, Content } from './styles';
import getMinutesSincePostCreation from '../../utils/getMinutesSincePostCreation';

export default function Posts() {
  const { data } = usePost();

  const sortedPosts = data?.results.sort((a: Ipost, b: Ipost) => {
    const dateA = new Date(a.created_datetime).getTime();
    const dateB = new Date(b.created_datetime).getTime();
    return dateB - dateA;
  });

  return (
    <Container>
      {sortedPosts?.map((post: Ipost) => (
        <Post key={post.id}>
          <Header title={post.title} height="0.7rem" />

          <Content>
            <div className="user">
              <span>@{post.username}</span>
              <span>{getMinutesSincePostCreation(post.created_datetime)}</span>
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
