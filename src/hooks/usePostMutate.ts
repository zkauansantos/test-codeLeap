import { useMutation } from '@tanstack/react-query';
import { Ipost } from '../types/interfaces/Post';

export default function useFoodMutate() {
  async function createPost(post: Ipost) {
    await fetch('https://dev.codeleap.co.uk/careers/', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  }

  const mutate = useMutation({
    mutationFn: createPost,
  });

  return mutate;
}
