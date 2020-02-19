import React from 'react';
import { ContentContext, EnvContext } from 'app-context/app-context';

export class LinkContentType extends React.Component {

    static contextType = ContentContext;
    context!: { link: string };

    render() {
        return (
            <EnvContext.Consumer>
                {env => (
                    <div className={`${env.display === 'home' ? 'columns' : ''}`}>
                        <div className="column">
                            <p className="title">Link web</p>
                            <p className="subtitle is-4 has-text-grey-light">Put a link on the web, article, image, video</p>
                        </div>
                        <div className="column">
                            <form>
                                <div className="field is-grouped">
                                    <div className="control has-icons-left is-expanded">
                                        <input
                                            required
                                            type="text"
                                            placeholder="link address"
                                            name="link" className="input is-medium"
                                            defaultValue={this.context.link}
                                        />
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
                )}
            </EnvContext.Consumer>
        )
    }
}
