import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import auth from './reducers/auth'

export const rootReducer = combineReducers({
  auth
})


export const initStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}
