// LOAD CONSTANTS //
import { LOAD_CONTENT, DETECT_DIMENSIONS, CHANGE_FONT_SIZE, CHANGE_THEME } from './Constants';

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

// CHANGE THEME ACTIONS //
export const changeThemeDispatcher = (value) => ({ type: CHANGE_THEME, theme: value});
export const changeTheme = (value) => {
    return (dispatch) => {
        dispatch(changeThemeDispatcher(value));
    }
}