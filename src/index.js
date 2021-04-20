import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import './styles/styles.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store/store";
import {config} from "./config/config";
import setTheme from './styles/themeSelector';
import actions from './reducers/boundActionCreators';
import * as api from './api/api';

// determine if this is a small screen
actions.updateIsScreenSmall(window.innerWidth < 900);
window.addEventListener("resize", function() {
    actions.updateIsScreenSmall(window.innerWidth < 900);
});

//set theme using system defaults or local storage
setTheme();

console.log(store.getState())

function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
