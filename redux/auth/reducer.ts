import { AuthActions, AuthActionTypes } from "./actionCreators";
import { IAuthState } from "./contracts";

const initialState: IAuthState = {
  user: null,
  error: null
}

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return {...state, user: action.payload, error: null}
    case AuthActionTypes.SET_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
