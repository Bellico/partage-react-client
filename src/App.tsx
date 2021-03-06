import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { HomePage } from 'layout/home.page';
import { BoardPage } from 'layout/board.page';
import { Navbar } from 'layout/navbar';
import { ContentTypeContext, EnvContext } from 'app-context/app-context';
import { ContentTypeModel } from 'models/content-type.model';
import { AppContextProvider } from 'app-context/app-context.provider';
import { defaultValues } from 'models/default-values';

export const App = () => {

    const [contentTypeItems, setContentTypeItems] = useState<ContentTypeModel[]>(defaultValues);
    const provider = new AppContextProvider(contentTypeItems, setContentTypeItems);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <EnvContext.Provider value={{ display: 'home' }} >
                        <ContentTypeContext.Provider value={provider}>
                            <HomePage />
                        </ContentTypeContext.Provider>
                    </EnvContext.Provider>
                </Route>

                <Route path="/board/:boardId/content/:contentId">
                    <EnvContext.Provider value={{ display: 'board' }} >
                        <BoardPage />
                    </EnvContext.Provider>
                </Route>

                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
