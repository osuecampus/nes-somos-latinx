// LOAD CONSTANTS //
import { LOAD_CONTENT, DETECT_DIMENSIONS, CHANGE_FONT_SIZE, CHANGE_THEME, SET_READER_TEXT, PLAY_PAUSE_READER, RESTART_READER } from './Constants';

// LOAD CONTENT ACTIONS //
export const loadContentDispatcher = (content) => ({ type: LOAD_CONTENT, content });
export const loadContent = () => {
    return (dispatch) => {
        fetch('./assets/json/parcel.json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
               
                return response;
            })
            .then((response) => response.json())
            .then((items) =>  dispatch(loadContentDispatcher(items)))
            .catch((e) => console.log(e));
    }; 
}

// DETECT DIMENSIONS ACTIONS //
export const detectDimensionsDispatcher = (value) => ({ type: DETECT_DIMENSIONS, mobile: value});
export const detectDimensions = (value) => {
    return (dispatch) => {
        dispatch(detectDimensionsDispatcher(value));
    }
}

// CHANGE FONT SIZE ACTIONS //
export const changeFontSizeDispatcher = (value) => ({ type: CHANGE_FONT_SIZE, fontSize: value});
export const changeFontSize = (value) => {
    return (dispatch) => {
        dispatch(changeFontSizeDispatcher(value));
    }
}

// SET READER TEXT ACTIONS //
export const setReaderTextDispatcher = (value) => ({ type: SET_READER_TEXT, readerText: value});
export const setReaderText = (value) => {
    return (dispatch) => {
        dispatch(setReaderTextDispatcher(value));
    }
}

// CHANGE THEME ACTIONS //
export const changeThemeDispatcher = (value) => ({ type: CHANGE_THEME, theme: value});
export const changeTheme = (value) => {
    return (dispatch) => {
        dispatch(changeThemeDispatcher(value));
    }
}

// PLAY PAUSE READER ACTIONS //
export const playPauseReaderDispatch = (value) => ({ type: PLAY_PAUSE_READER, play: value});
export const playPauseReader = (value) => {
    return (dispatch) => {
        dispatch(playPauseReaderDispatch(value));
    }
}

// RESTART READER ACTIONS //
export const restartReaderDispatch = (value) => ({ type: RESTART_READER, restartTrigger: value});
export const restartReader = (value) => {
    return (dispatch) => {
        dispatch(restartReaderDispatch(value));
    }
}