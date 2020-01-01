import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <header className="hero is-large is-dark">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="icons/share.svg" alt="share logo" />
                        <h1 className="navbar-item title">Partage</h1>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" href="/">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="/">Home</a>
                        <a className="navbar-item" href="/">Documentation</a>
                        <div className="navbar-item">
                            <div className="buttons">
                                <NavLink
                                    className="button is-primary"
                                    to="/hello">
                                    <strong>Sign up</strong>
                                </NavLink>
                                <a className="button is-light" href="/">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <section className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-2 is-spaced">
                            Welcome to Partage
                        </h1>
                        <h2 className="subtitle is-4">
                            <strong>Partage</strong> is an app to share any content with anyone
                            <br />
                            This application is built with <strong>react</strong>
                        </h2>
                    </div>
                </div>
            </div>
        </section>

    </header>
);
