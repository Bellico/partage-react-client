import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { HomePage } from 'core/home-page';
import { ContentTypeFullPage } from 'core/content-type-full-page';
import { Navbar } from 'core/navbar';
import { ContentTypeContext } from 'context/content-type.context';
import { ContentTypeModel } from 'models/content-type.model';
import { ContentTypeContextProvider } from 'context/content-type.context.provider';

export const App = () => {

    const [contentTypeItems, setContentTypeItems] = useState<ContentTypeModel[]>([]);
    const provider = new ContentTypeContextProvider(contentTypeItems, setContentTypeItems);

    useEffect(() => {
        setContentTypeItems([
            {
                id: 1,
                colorName: 'light',
                typeName: 'todo',
                size: 'medium',
                value: { note: 'ok' }
            },
            {
                id: 2,
                colorName: 'danger',
                typeName: 'note',
                size: 'medium',
                value: null
            },
            {
                id: 3,
                colorName: 'dark',
                typeName: 'note',
                size: 'medium',
                value: null
            },
            {
                id: 4,
                colorName: 'black',
                typeName: 'todo',
                size: 'medium',
                value: null
            },
            {
                id: 5,
                colorName: 'light',
                typeName: 'link',
                size: 'medium',
                value: null
            }
        ]);
    }, []);

    return (
        < Router >
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <ContentTypeContext.Provider value={provider}>
                        <HomePage />
                    </ContentTypeContext.Provider>
                </Route>

                <Route path="/hello/:id">
                    <ContentTypeFullPage />
                </Route>

                <Redirect to="/" />
            </Switch>
        </Router >
    );
}
