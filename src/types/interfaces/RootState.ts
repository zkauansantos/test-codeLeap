export interface RootState {
  user: UserState
  modal: ModalState
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
