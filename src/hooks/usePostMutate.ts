import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export default function usePostMutate() {
  async function createPost({ body, method, postId, message }: any) {
    const url = postId
      ? `https://dev.codeleap.co.uk/careers/${postId}/`
      : 'https://dev.codeleap.co.uk/careers/';

    try {
      await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        body: JSON.stringify(body),
      });
      toast.success(message);
    } catch (error) {
      toast.error('Sorry, an error occurred, please try again');
    }
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
