// LOAD CONSTANTS //
import { LOAD_CONTENT, SET_LANGUAGE, DETECT_DIMENSIONS, CHANGE_FONT_SIZE, CHANGE_THEME, SET_READER_TEXT, PLAY_PAUSE_READER, RESTART_READER, SET_CURRENT_UNIT, SET_CURRENT_PAGE, SHOW_SCROLL } from './Constants';

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
    localStorage.setItem('nes-' + process.env.PROJECT_NAME + "-dimensions", value);
    return (dispatch) => {
        dispatch(detectDimensionsDispatcher(value));
    }
}

// SET LANGUAGE ACTIONS //
export const setLanguageDispatcher = (value) => ({ type: SET_LANGUAGE, language: value});
export const setLanguage = (value) => {
    return (dispatch) => {
        dispatch(setLanguageDispatcher(value));
    }
}

// CHANGE FONT SIZE ACTIONS //
export const changeFontSizeDispatcher = (value) => ({ type: CHANGE_FONT_SIZE, fontSize: value});
export const changeFontSize = (value) => {
    localStorage.setItem('nes-' + process.env.PROJECT_NAME + "-font-size", value);
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
    localStorage.setItem('nes-' + process.env.PROJECT_NAME + "-theme", value);
    window.document.body.classList.remove('darkLook');
    window.document.body.classList.remove('lightLook');
    window.document.body.classList.add(value);
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

// SET CURRENT UNIT ACTIONS //
export const setCurrentUnitDispatch = (value) => ({ type: SET_CURRENT_UNIT, currentUnit: value});
export const setCurrentUnit = (value) => {
    localStorage.setItem('nes-' + process.env.PROJECT_NAME + "-current-unit", value);
    return (dispatch) => {
        dispatch(setCurrentUnitDispatch(Number(value)));
    }
}

// SET CURRENT PAGE ACTIONS //
export const setCurrentPageDispatch = (value) => ({ type: SET_CURRENT_PAGE, currentPage: value});
export const setCurrentPage = (value, unit) => {
    localStorage.setItem('nes-' + process.env.PROJECT_NAME + "-current-page", value);
    return (dispatch) => {
        dispatch(setCurrentPageDispatch(value));
        unit !== null ? dispatch(addProgress(value, unit)) : null
    }
}

// SHOW SCROLL ACTIONS //
export const showScrollDispatch = (boolean) => ({ type: SHOW_SCROLL, scrolled: boolean});
export const showScroll = (boolean) => {
    return (dispatch) => {
        dispatch(showScrollDispatch(boolean));
    }
}

 // SET CURRENT UNIT ACTIONS //
export const addProgress = (data, unit) => {
    let progress = [];
    if(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ unit) === null){
        localStorage.setItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ unit, JSON.stringify([]));
    }
    progress = JSON.parse(localStorage.getItem('nes-' + process.env.PROJECT_NAME + '-progress-'+ unit));
    progress.includes(Number(data)) ?
        null
    :
        progress.push(Number(data)),
        localStorage.setItem('nes-' + process.env.PROJECT_NAME + '-progress-' + unit, JSON.stringify(progress));
    return (dispatch) => {
      
    }
}