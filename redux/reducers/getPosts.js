import * as actionType from '../actions/actionTypes'

const initialState = {
  posts: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.GOT_POSTS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case actionType.UPDATED_POST: {
      const posts = [...state.posts]
      const targetIndex = posts.findIndex(post => post.id === action.payload.id)
      posts[targetIndex] = action.payload
      return {
        ...state,
        posts: posts,
      }
    }
    default: {
      return { ...state }
    }
  }
}
