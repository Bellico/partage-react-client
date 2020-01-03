import React from 'react';

export class AddingContentSection extends React.Component<{ colorName: string, onClickAddingButton: () => void }> {

    handleClick = () => {
        this.props.onClickAddingButton();
    }

    render() {
        return (
            <section className={`hero is-${this.props.colorName}`}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="has-text-centered">
                                    <p className="subtitle">Add a new content</p>
                                    <span
                                        className="icon action is-large"
                                        onClick={this.handleClick}>
                                        <i className="fas fa-plus-circle fa-3x"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
