import React from 'react';

export class PictureContentType extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder 2" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    </div>
                </div>
            </div>
        );
    }
}
