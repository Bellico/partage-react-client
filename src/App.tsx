import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { HomePage } from 'core/home-page';

export const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/hello">
                <h1>Hello</h1>
            </Route>

            <Redirect to="/" />
        </Switch>
    </Router>
);
