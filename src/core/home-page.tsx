import React from 'react';
import { Header } from './header';
import { ContentTypeListComponent } from './content-type-list-component';
import { Footer } from './footer';

export const HomePage = () => (
    <>
        <Header />
        <ContentTypeListComponent />
        <Footer />
    </>
);
