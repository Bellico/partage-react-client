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

        <section className="hero is-medium is-danger is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Presenter elementType={NoteTypeComponent.elementType} />
                        </div>
                    </div>
                    <div className="columns"></div>
                    <div className="columns">
                        <div className="column">
                            <NoteTypeComponent />
                        </div>
                    </div>

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
