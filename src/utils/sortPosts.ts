import { Ipost } from '../types/interfaces/Post';

export default function sortPosts(posts: Ipost[] | undefined): Ipost[] | null {
  if (!posts) {
    return null;
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.created_datetime).getTime();
    const dateB = new Date(b.created_datetime).getTime();
    return dateB - dateA;
  });
}
