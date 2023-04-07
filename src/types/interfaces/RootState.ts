export interface RootState {
  user: UserState
}

export interface UserState {
  name: string,
  isLogged: boolean
}
