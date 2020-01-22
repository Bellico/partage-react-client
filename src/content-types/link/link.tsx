import React from 'react';

export class LinkContentType extends React.Component {
    render() {
        return (
            <>
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title">Link web</p>
                        <p className="subtitle is-4 has-text-grey-light">Put a link on the web, article, image, video</p>
                    </div>
                    <div className="column">
                        <form>
                            <div className="field is-grouped">
                                <div className="control has-icons-left is-expanded">
                                    <input type="email" name="email" className="input is-medium" placeholder="link address" required />
                                    <span className="icon is-left">
                                        <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </div>
                                <div className="control">
                                    <button className="button is-medium is-link" >
                                        <strong>Go it</strong>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
