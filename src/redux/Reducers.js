import { combineReducers } from 'redux';
import { LOAD_CONTENT, LOAD_ANSWERS, SET_PROGRESS, SET_END } from "./Constants";

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

const answers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ANSWERS:
      return action.answers;
    default:
      return state;
  }
};

const step = (state = 0, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return action.currentStep;
    default:
      return state;
  }
};

const end = (state = 0, action) => {
  switch (action.type) {
    case SET_END:
      return action.end;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  content,
  answers,
  step,
  end
});