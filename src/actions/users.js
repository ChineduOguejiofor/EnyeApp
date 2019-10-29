import { ADD_DATA, GET_DATA, FETCH_ERROR, USER_ADDED } from './types';
import axios from 'axios';

export const addUser = values => {
  return {
    type: ADD_DATA,
    payload: values
  };
};

export const addToState = values => {
  return {
    type: USER_ADDED,
    payload: values
  };
};

export const setErrors = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

export const adduserToDb = async values => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const body = JSON.stringify(values);
    const res = await axios.post(
      'https://us-central1-enye-71334.cloudfunctions.net/entries',
      body,
      config
    );
    console.log(res.data);
  } catch (error) {
    console.log('Failed on Error ', error);
  }
};

export const getUsersfromDB = () => async dispatch => {
  console.log('Get users was called');

  try {
    const res = await axios.get(
      'https://us-central1-enye-71334.cloudfunctions.net/entries'
    );
    console.log(res.data);
    dispatch({
      type: GET_DATA,
      payload: res.data
    });
  } catch (error) {
    console.log('Failed on Error ', error);
  }
};
