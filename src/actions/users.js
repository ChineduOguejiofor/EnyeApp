import { ADD_DATA } from './types';

export const addInfo = values => async dispatch => {
  dispatch({
    type: ADD_DATA,
    payload: values
  });
};
