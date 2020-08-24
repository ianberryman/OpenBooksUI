import { combineReducers } from "redux";
import { config } from '../config/config';
import * as uiActions from './uiActions';

export default combineReducers({
    data: dataReducer,
    app: appReducer,
    ui: uiReducer
});

export function dataReducer(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export function appReducer(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export function uiReducer(state = {isScreenSmall: false, theme: ''}, action) {
    switch (action.type) {
        case uiActions.UPDATE_IS_SCREEN_SMALL:
            return {...state, isScreenSmall: action.payload};
        case uiActions.UPDATE_THEME:
            return {...state, theme: action.payload}
        default:
            return state;
    }
}
