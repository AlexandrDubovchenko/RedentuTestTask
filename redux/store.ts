import { combineReducers, createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducer';
import { newsReducer } from './news/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer
})

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
