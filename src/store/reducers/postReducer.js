import {
  GET_POSTS, GET_POST, DELETE_POST, ADD_POST, EDIT_POST,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  post: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(
          post => (post.id === action.payload.id ? (post = action.payload) : post),
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
