import { combineReducers } from 'redux';
import { LOAD_CONTENT, DETECT_DIMENSIONS } from "./Constants";

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

const mobile = (state = initialState, action) => {
  switch (action.type) {
    case DETECT_DIMENSIONS:
      return action.mobile;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  content,
  mobile
});