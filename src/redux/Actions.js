// LOAD CONSTANTS //
import { LOAD_CONTENT, LOAD_ANSWERS, SET_STEP, SET_PROGRESS, SET_END } from './Constants';

// LOAD CONTENT ACTIONS //
export const loadContentDispatcher = (content) => ({ type: LOAD_CONTENT, content });
export const loadContent = () => {
    return (dispatch) => {
        fetch('./assets/json/content.json')
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

// LOAD ANSWERS ACTIONS //
export const loadAnswersDispatcher = (answers) => ({ type: LOAD_ANSWERS, answers });
export const loadAnswers = () => {
    return (dispatch) => {
        fetch('./assets/json/answers.json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) =>  dispatch(loadAnswersDispatcher(items)))
            .catch((e) => console.log(e));
    }; 
}

// SET PROGRESS ACTIONS //
export const setProgressDispatcher = (step) => ({ type: SET_PROGRESS, currentStep: step});
export const setProgress = (step) => {
    return (dispatch) => {
        dispatch(setProgressDispatcher(step));
    }
}

// SET END ACTIONS //
export const setEndDispatcher = (toggle) => ({ type: SET_END, end: toggle});
export const setEnd = (toggle) => {
    return (dispatch) => {
        dispatch(setEndDispatcher(toggle));
    }
}