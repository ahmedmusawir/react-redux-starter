import axios from 'axios';
import { REST_URL } from './constants';
import {
  GET_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from './actionTypes';

export const getComments = () => async (dispatch) => {
  const res = await axios.get(`${REST_URL}/comments`);

  dispatch({
    type: GET_COMMENTS,
    payload: res.data,
  });
};

export const getComment = id => async (dispatch) => {
  const res = await axios.get(`${REST_URL}/comments/${id}`);

  dispatch({
    type: GET_COMMENT,
    payload: res.data,
  });
};

export const addComment = comment => async (dispatch) => {
  const res = await axios.post(`${REST_URL}/comments`, comment);

  dispatch({
    type: ADD_COMMENT,
    payload: res.data,
  });
};

export const editComment = comment => async (dispatch) => {
  const res = await axios.put(`${REST_URL}/comments/${comment.id}`, comment);

  dispatch({
    type: EDIT_COMMENT,
    payload: res.data,
  });
};

export const deleteComment = id => async (dispatch) => {
  await axios.delete(`${REST_URL}/comments/${id}`);

  dispatch({
    type: DELETE_COMMENT,
    payload: id,
  });
};
