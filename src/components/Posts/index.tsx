import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePost from '../../hooks/usePost';
import Post from './Post';
import { Container } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import sortPosts from '../../utils/sortPosts';
import { Spinner } from '../Spinner';
import { Ipost } from '../../types/interfaces/Post';

export default function Posts() {
  const { name } = useSelector((state: RootState) => state.user);
  const [isBottom, setIsBottom] = useState(false);
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetching,
  } = usePost();

  const posts = data?.pages.reduce<Ipost[]>(
    (prevPosts, page) => prevPosts.concat(page.results),
    [],
  ) ?? [];

  const sortedPosts = sortPosts(posts);

  async function handleScroll(e: any) {
    const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;

    if (scrollHeight - scrollTop <= clientHeight) {
      setIsBottom(true);
    }
  }

  function next() {
    if (isBottom) {
      if (!isFetching && !isLoading) {
        fetchNextPage();
      }
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    next();
  }, [isBottom]);

  return (
    <Container>
      <InfiniteScroll
        style={{ width: '100%' }}
        dataLength={posts.length}
        hasMore={hasNextPage || isLoading}
        next={() => next()}
        loader={false}
        scrollableTarget={false}
      >

        {sortedPosts?.map((post) => (
          <Post key={post.id} post={post} name={name} />
        ))}
      </InfiniteScroll>
      {isLoading && <Spinner />}
    </Container>
  );
}
