import { NewsActions, NewsActionTypes } from "./actionCreators";
import { INewsState } from "./contracts";

const initialState: INewsState = {
  news: []
}

export const newsReducer = (state = initialState, action: NewsActions) => {
  switch (action.type) {
    case NewsActionTypes.SET_NEWS:
      return {...state, news: action.payload}
    default:
      return state
  }
}
