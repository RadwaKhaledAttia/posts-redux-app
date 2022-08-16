import { GET_POSTS, UPDATE_POST, DELETE_POST } from './actionTypes'

export const getPosts = data => {
  return {
    type: GET_POSTS,
    payload: data,
  }
}
export const updatePost = data => {
  return {
    type: UPDATE_POST,
    payload: data,
  }
}

export const deletePost = data => {
  return {
    type: DELETE_POST,
    payload: data,
  }
}
