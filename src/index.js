import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import './styles/styles.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store/store";
import {config} from "./config/config";
import actions from './reducers/boundActionCreators';
import RootStore from './store/RootStore';
import { ApolloProvider } from '@apollo/client/react';

// determine if this is a small screen
actions.updateIsScreenSmall(window.innerWidth < 900);
window.addEventListener("resize", function() {
    actions.updateIsScreenSmall(window.innerWidth < 900);
});

export const MobxContext = React.createContext();
const MobxProvider = (({ store, children }) => {
    return (
        <MobxContext.Provider value={store}>
            {children}
        </MobxContext.Provider>
    );
});

export const rootStore = new RootStore();

rootStore.uiStore.setTheme("light");

function App() {

    return (
        <Provider store={store}>
            <ApolloProvider client={rootStore.apolloClient}>
                <MobxProvider store={rootStore}>
                    <Router>
                        <Switch>
                            <Route path="/" component={Home}></Route>
                        </Switch>
                    </Router>
                </MobxProvider>
            </ApolloProvider>
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
