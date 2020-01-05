import React from 'react';

export class AddingContentSection extends React.Component<{ onClickAddingButton: () => void }> {

    handleClick = () => {
        this.props.onClickAddingButton();
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="subtitle">Add a new content</p>
                            <span
                                className="icon action is-large"
                                onClick={this.handleClick}>
                                <i className="fas fa-plus-circle fa-3x"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
