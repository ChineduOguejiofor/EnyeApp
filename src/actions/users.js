import { ADD_DATA, USER_ADDED, FETCH_ERROR } from './types';
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

export const adduserToDb = async values => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const body = JSON.stringify(values);
    const res = await axios.post(
      'https://us-central1-enye-71334.cloudfunctions.net/entries',
      body,
      config
    );
    return res.data;
  } catch (error) {
    return {
      type: FETCH_ERROR,
      payload: error.toString()
    };
  }
};
