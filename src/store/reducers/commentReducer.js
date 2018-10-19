import {
  GET_COMMENTS,
  GET_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
} from '../actions/actionTypes';

const initialState = {
  comments: [],
  comment: {},
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(
          comment => (comment.id === action.payload.id ? (comment = action.payload) : comment),
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload),
      };
    default:
      return state;
  }
};

export default commentReducer;
