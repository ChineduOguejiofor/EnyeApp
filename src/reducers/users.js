import { GET_DATA, ADD_DATA, FETCH_ERROR, USER_ADDED } from '../actions/types';

const initialState = {
  dataSource: [],
  test: null,
  errors: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return {
        ...state,
        test: payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        errors: payload
      };
    case GET_DATA:
    case USER_ADDED:
      return {
        ...state,
        dataSource: [...state.dataSource, payload]
      };
    default:
      return state;
  }
}
