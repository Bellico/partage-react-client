import React from 'react';
import { Icon } from 'elements/icon';

export class TodoContentType extends React.Component {
    render() {
        return (
            <article className="panel is-warning">
                <p className="panel-heading">
                    Ma Todo List
                    </p>

                <p className="panel-tabs">
                    <a href="/" className="is-active">All</a>
                    <a href="/">Active</a>
                    <a href="/">Completed</a>
                </p>

                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input is-warning" type="text" placeholder="What's need to be done?" />
                        <Icon className="is-left">search</Icon>
                    </p>
                </div>

                <span className="panel-block is-active">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    bulma
                    </span>

                <span className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    marksheet
                    </span>

                <span className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    minireset.css
                    </span>

                <span className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    jgthms.github.io
                    </span>
            </article>
        );
    }
}
