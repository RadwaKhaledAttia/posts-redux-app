import { GET_POSTS, UPDATE_POST } from './actionTypes'

export const getPosts = () => {
  return {
    type: GET_POSTS,
  }
}
export const updatePost = data => {
  return {
    type: UPDATE_POST,
    payload: data,
  }
}
