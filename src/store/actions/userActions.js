import axios from 'axios';
import { REST_URL } from './constants';
import {
  GET_USERS, GET_USER, ADD_USER, DELETE_USER, EDIT_USER,
} from './actionTypes';

export const getUsers = () => async (dispatch) => {
  const res = await axios.get(`${REST_URL}/users`);

  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};

export const getUser = id => async (dispatch) => {
  const res = await axios.get(`${REST_URL}/users/${id}`);

  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

export const addUser = user => async (dispatch) => {
  const res = await axios.post(`${REST_URL}/users`, user);

  dispatch({
    type: ADD_USER,
    payload: res.data,
  });
};

export const editUser = user => async (dispatch) => {
  const res = await axios.put(`${REST_URL}/users/${user.id}`, user);

  dispatch({
    type: EDIT_USER,
    payload: res.data,
  });
};

export const deleteUser = id => async (dispatch) => {
  await axios.delete(`${REST_URL}/users/${id}`);

  dispatch({
    type: DELETE_USER,
    payload: id,
  });
};
