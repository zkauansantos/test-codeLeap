import { useInfiniteQuery } from '@tanstack/react-query';
import { Iposts } from '../types/interfaces/Post';

export default function usePost() {
  async function loadPosts(pageParam: number = 0): Promise<Iposts> {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/?limit=10&offset=${pageParam}`);
    const json = await response.json();
    return json;
  }

  return useInfiniteQuery({
    queryFn: ({ pageParam }) => loadPosts(pageParam),
    queryKey: ['posts-data'],
    retry: false,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const regex = /offset=(\d+)/;
      const match = lastPage.next.match(regex);

      if (match) {
        return parseInt(match[1], 10);
      }

      return undefined;
    },
    refetchOnMount: true,
  });
}
