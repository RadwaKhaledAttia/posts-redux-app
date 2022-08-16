import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'

import {
  getPostsSaga,
  editPostSaga,
  deletePostSaga,
} from './sagas'

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(getPostsSaga)
sagaMiddleware.run(editPostSaga)
sagaMiddleware.run(deletePostSaga)
