import { combineReducers } from 'redux';
import { LOAD_CONTENT } from "./Constants";

const initialState = []

// REDUCERS //
const content = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENT:
      return action.content;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  content
});