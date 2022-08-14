import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'

import {
  getPostsSaga,
  addPostSaga,
  deletePostSaga,
  updatePostSaga,
} from './sagas'

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(getPostsSaga)
