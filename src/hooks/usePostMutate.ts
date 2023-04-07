import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostMutate() {
  async function createPost({ body, method, postId }: any) {
    const url = postId
      ? `https://dev.codeleap.co.uk/careers/${postId}/`
      : 'https://dev.codeleap.co.uk/careers/';

    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(body),
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
