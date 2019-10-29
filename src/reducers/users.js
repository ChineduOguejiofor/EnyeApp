import { USER_ADDED, FETCH_ERROR } from '../actions/types';

const initialState = {
  dataSource: [],
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ADDED:
      return {
        ...state,
        dataSource: [...payload]
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
