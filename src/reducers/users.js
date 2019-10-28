import { ADD_DATA } from '../actions/types';

const initialState = {
  dataSource: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return {
        ...state,
        dataSource: [...state.dataSource, payload]
      };
    default:
      return state;
  }
}
