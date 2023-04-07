import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Ipost } from '../types/interfaces/Post';

export default function usePostMutate() {
  async function createPost(post: Ipost) {
    await fetch('https://dev.codeleap.co.uk/careers/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(post),
    });
  }

  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts-data']);
    },
  });

  return mutate;
}
