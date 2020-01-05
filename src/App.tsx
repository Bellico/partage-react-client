import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { HomePage } from 'core/home-page';
import { ContentTypeFullPage } from 'core/content-type-full-page';
import { Navbar } from 'core/navbar';

export const App = () => (


    <Router>
        <Navbar />

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/hello/:id">
                <ContentTypeFullPage />
            </Route>

            <Redirect to="/" />
        </Switch>
    </Router>

);
