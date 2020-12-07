import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { login } from "../../api";
import { appStateType } from "../store";
import { IUser } from "./contracts";

export enum AuthActionTypes {
  SET_USER = 'auth/SET_USER',
  SET_ERROR = 'auth/SET_ERROR'
}

export interface ISetUser extends Action<AuthActionTypes> {
  type: AuthActionTypes.SET_USER,
  payload: IUser | null
}
export interface ISetError extends Action<AuthActionTypes> {
  type: AuthActionTypes.SET_ERROR,
  payload: string
}

export const setUser = (payload: IUser | null): ISetUser => ({
  type: AuthActionTypes.SET_USER,
  payload
})
export const setError = (payload: string): ISetError => ({
  type: AuthActionTypes.SET_ERROR,
  payload
})

export const getUser = (loginData: { login: string, password: string }): ThunkAction<void, appStateType, unknown, Action<string>> => async dispatch => {
  const user: IUser | undefined = await login(loginData)
  if (user) {
    dispatch(
      setUser(user)
    )
  } else {
    dispatch(setError("Wrong login or password"))
  }

}

export type AuthActions = ISetUser | ISetError
