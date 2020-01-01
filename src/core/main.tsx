import React from 'react';
import { NoteTypeComponent } from 'elements-types/note-type/note-type.component';
import { Presenter } from 'core/home-presenter-type';

export const Main = () => (
    <main>
        <section className="hero is-large is-light">
            <div className="hero-body">
                <div className="container">
                    <NoteTypeComponent />
                </div>
            </div>
        </section>

        <section className="hero is-large is-danger">
            <div className="hero-body">
                <div className="container">
                    <Presenter elementType={NoteTypeComponent.elementType}>
                        <NoteTypeComponent />
                    </Presenter>
                </div>
            </div>
        </section>

        <section className="hero is-large is-dark">
            <div className="hero-body">
                <div className="container">
                    <NoteTypeComponent />
                </div>
            </div>
        </section>

        <section className="hero is-large is-black">
            <div className="hero-body">
                <div className="container">
                    <NoteTypeComponent />
                </div>
            </div>
        </section>

        <section className="hero is-large is-light">
            <div className="hero-body">
                <div className="container">
                    <NoteTypeComponent />
                </div>
            </div>
        </section>

    </main>
);
