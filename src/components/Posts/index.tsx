import { useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';
import usePost from '../../hooks/usePost';
import Post from './Post';
import { Container } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import sortPosts from '../../utils/sortPosts';

export default function Posts() {
  const {
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
  } = usePost();
  const { name } = useSelector((state: RootState) => state.user);
  const sortedPosts = sortPosts(data?.pages[0].results);

  return (
    <Container>
      <InfiniteScroll
        dataLength={200}
        hasMore={hasNextPage || isLoading}
        next={() => fetchNextPage()}
        loader={<h1> Carregando. .....</h1>}
      >
        {sortedPosts?.map((post) => (
          <Post key={post.id} post={post} name={name} />
        ))}
      </InfiniteScroll>
    </Container>
  );
}
