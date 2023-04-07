import { Ipost } from './Post';

export interface RootState {
  user: UserState
  modal: ModalState
  posts: PostsState
}

export interface UserState {
  name: string,
  isLogged: boolean
}

export interface ModalState {
  visible: boolean,
  edit: boolean,
  del: boolean,
  postId?: number | null | undefined
}

export interface PostsState extends Ipost {
  arrPosts: Ipost[]
}
