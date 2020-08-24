import {applyMiddleware, createStore, bindActionCreators} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/reducers";
import { config} from "../config/config";

let store = createStore(rootReducer, applyMiddleware(thunk));

if (config.redux.devMode) store.subscribe(() => console.log(store.getState()));

export default store;