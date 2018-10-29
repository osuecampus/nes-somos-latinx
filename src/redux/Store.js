// REDUX STORE //
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducer from "./Reducers";

export const Store = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxThunk)
    );
}