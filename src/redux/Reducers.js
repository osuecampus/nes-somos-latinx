import { combineReducers } from 'redux';
import { LOAD_CONTENT, SET_LANGUAGE, DETECT_DIMENSIONS, CHANGE_FONT_SIZE, CHANGE_THEME, SET_READER_TEXT, PLAY_PAUSE_READER, RESTART_READER, SET_CURRENT_UNIT, SET_CURRENT_PAGE, SHOW_SCROLL } from "./Constants";

const initialState = []

// REDUCERS //
const language = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

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

const theme = (state = 'lightLook', action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.theme;
    default:
      return state;
  }
};

const readerText = (state = '', action) => {
  switch (action.type) {
    case SET_READER_TEXT:
      return action.readerText;
    default:
      return state;
  }
};

const play = (state = 0, action) => {
  switch (action.type) {
    case PLAY_PAUSE_READER:
      return action.play;
    default:
      return state;
  }
};

const restartTrigger = (state = 0, action) => {
  switch (action.type) {
    case RESTART_READER:
      return action.restartTrigger;
    default:
      return state;
  }
};

const currentUnit = (state = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_UNIT:
      return action.currentUnit;
    default:
      return state;
  }
};

const currentPage = (state = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.currentPage;
    default:
      return state;
  }
};

const scrolled = (state = false, action) => {
  switch (action.type) {
    case SHOW_SCROLL:
      return action.scrolled;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
  content,
  fontSize,
  theme,
  readerText,
  play,
  restartTrigger,
  currentUnit,
  currentPage,
  scrolled,
  mobile,
  language
});