import { useInfiniteQuery } from '@tanstack/react-query';
import { Iposts } from '../types/interfaces/Post';

export default function usePost() {
  async function loadPosts(): Promise<Iposts> {
    const response = await fetch('https://dev.codeleap.co.uk/careers/?limit=10&offset=0');
    const json = await response.json();
    return json;
  }

  const query = useInfiniteQuery({
    queryFn: loadPosts,
    queryKey: ['posts-data'],
    retry: false,
  });

  return query;
}
