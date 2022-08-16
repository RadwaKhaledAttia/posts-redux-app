import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionType from '../actions/actionTypes'
import Api from '../../utils/api'

export default function* deletePostSaga() {
  yield takeEvery(actionType.DELETE_POST, deletePost)
}

function* deletePost(action) {
  try {
    const postResponse = yield call(Api.DeletePost, action.payload)
    yield put({ type: actionType.DELETED_POST, payload: postResponse })
  } catch (err) {
    console.log(err)
  }
}
