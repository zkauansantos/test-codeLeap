import { useQuery } from '@tanstack/react-query';
import { Iposts } from '../types/interfaces/Post';

export default function useFetch() {
  async function loadPosts(): Promise<Iposts> {
    const response = await fetch('https://dev.codeleap.co.uk/careers/');
    const json = await response.json();
    return json;
  }

  const query = useQuery({
    queryFn: loadPosts,
    queryKey: ['posts-data'],
    retry: false,
  });

  return query;
}
