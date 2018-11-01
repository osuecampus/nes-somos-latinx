import { combineReducers } from 'redux';
import { LOAD_CONTENT, DETECT_DIMENSIONS, CHANGE_FONT_SIZE } from "./Constants";

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

const mobile = (state = false, action) => {
  switch (action.type) {
    case DETECT_DIMENSIONS:
      return !action.mobile;
    default:
      return state;
  }
};

const fontSize = (state = 'medium', action) => {
  switch (action.type) {
    case CHANGE_FONT_SIZE:
      return action.fontSize;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  content,
  fontSize,
  mobile
});