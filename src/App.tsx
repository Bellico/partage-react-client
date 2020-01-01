import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Home } from 'core/home';

export const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/hello">
                <h1>Hello</h1>
            </Route>

            <Redirect to="/" />
        </Switch>
    </Router>
);
