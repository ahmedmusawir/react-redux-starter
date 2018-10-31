import axios from 'axios';
import { REST_POSTS_URL } from './constants';
import { postData } from './testData';
import {
  GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST,
} from './actionTypes';

export const getPosts = () => async (dispatch) => {
  const res = await axios.get(`${REST_POSTS_URL}/posts`);

  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};

export const getPost = id => async (dispatch) => {
  const res = await axios.get(`${REST_POSTS_URL}/posts/${id}`);

  dispatch({
    type: GET_POST,
    payload: res.data,
  });
};

export const addPost = post => async (dispatch) => {
  const res = await axios.post(`${REST_POSTS_URL}/posts`, post);

  dispatch({
    type: ADD_POST,
    payload: res.data,
  });
};

export const editPost = post => async (dispatch) => {
  const res = await axios.put(`${REST_POSTS_URL}/posts/${post.id}`, post);

  dispatch({
    type: EDIT_POST,
    payload: res.data,
  });
};

export const deletePost = id => async (dispatch) => {
  await axios.delete(`${REST_POSTS_URL}/posts/${id}`);

  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};
