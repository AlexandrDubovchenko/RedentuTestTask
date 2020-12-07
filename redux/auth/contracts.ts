export interface IAuthState {
  user: IUser | null,
  error: string | null
}

export interface IUser {
  id: number,
  login: string,
  name: string
}

