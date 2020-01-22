import React from 'react';
import { Header } from './header';
import { ContentTypesList } from '../core/content-types-list';
import { Footer } from './footer';

export const HomePage = () => (
    <>
        <Header />
        <ContentTypesList />
        <Footer />
    </>
);

