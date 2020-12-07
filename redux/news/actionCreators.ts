import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchNews } from "../../api";
import { appStateType } from "../store";
import { INewsItem } from "./contracts";

export enum NewsActionTypes {
  SET_NEWS = 'auth/SET_NEWS',
}

export interface ISetNews extends Action<NewsActionTypes> {
  type: NewsActionTypes.SET_NEWS,
  payload: INewsItem[]
}

export const setNews = (payload: INewsItem[]): ISetNews => ({
  type: NewsActionTypes.SET_NEWS,
  payload
})

export const getNews = (): ThunkAction<void, appStateType, unknown, Action<string>> => async dispatch => {
  const news: INewsItem[] = await fetchNews()
  dispatch(
    setNews(news)
  )
}

export type NewsActions = ISetNews
