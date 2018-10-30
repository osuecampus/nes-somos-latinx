// LOAD CONSTANTS //
import { LOAD_CONTENT } from './Constants';

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