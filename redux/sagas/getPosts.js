import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionType from '../actions/actionTypes'
import Api from '../../utils/api'

export default function* getPostsSaga() {
  yield takeEvery(actionType.GET_POSTS, fetchPosts)
}

function* fetchPosts(action) {
  try {
    const postsResponse = yield call(Api.getAll, action.payload)
    yield put({ type: actionType.GOT_POSTS, payload: postsResponse })
  } catch (err) {
    console.log(err)
  }
}
