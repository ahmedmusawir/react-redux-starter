import {
  GET_USERS, GET_USER, DELETE_USER, ADD_USER, EDIT_USER,
} from '../actions/actionTypes';

const initialState = {
  users: [],
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map(
          user => (user.id === action.payload.id ? (user = action.payload) : user),
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
