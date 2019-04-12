import axios from 'axios';
import {DELETE_USER, GET_ALL_USERS, GET_ERRORS, GET_USER, UPDATE_USER, REGISTRATION_USER, ADD_USER} from "./types";

export const getAllUsers = () => async dispatch => {
  const result = await axios.get("http://localhost:8080/api/reactapp/allUsers");
  dispatch({
      type: GET_ALL_USERS,
      payload: result.data
  })
};

export const getUser = (user_id, history) => async dispatch =>{
    const result = await axios.get(`http://localhost:8080/api/reactapp/${user_id}`);
    dispatch({
        type: GET_USER,
        payload: result.data
    })
};

export const addUser = (user, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8080/api/reactapp/user", user);
        history.push("/admin");
        dispatch({
            type: ADD_USER,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const registrationUser = (user, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8080/api/reactapp/user", user);
        history.push("/");
        dispatch({
            type: REGISTRATION_USER,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const deleteUser = user_id => async dispatch => {
    await axios.delete(`http://localhost:8080/api/reactapp/${user_id}`);
    dispatch({
        type: DELETE_USER,
        payload: user_id
    })
};

export const putUser = (user, user_id, history) => async dispatch =>{
    try {
        await axios.put(`http://localhost:8080/api/reactapp/update/${user_id}`, user);
        history.push("/admin");
        dispatch({
            type: UPDATE_USER,
            payload: {}
        })
    } catch (e) {
        history.push("/update")
    }
};
