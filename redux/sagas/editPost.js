import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionType from '../actions/actionTypes'
import Api from '../../utils/api'

export default function* editPostSaga() {
  yield takeEvery(actionType.UPDATE_POST, updatePost)
}

function* updatePost(action) {
  try {
    const postResponse = yield call(Api.EditPost, action.payload)
    yield put({ type: actionType.UPDATED_POST, payload: postResponse })
  } catch (err) {
    console.log(err)
  }
}
