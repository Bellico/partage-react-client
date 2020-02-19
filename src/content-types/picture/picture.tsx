import React from 'react';
import { ContentContext } from 'app-context/app-context';
import { NewPicture } from 'content-types/picture/new-picture';
import styled from 'styled-components';

const FigureImg = styled.img`
    max-height: calc(100vh - 150px - 4em);
    width: auto !important;
    margin: auto;
`;

export class PictureContentType extends React.Component {

    static contextType = ContentContext;
    context!: React.ContextType<typeof ContentContext>;

    render() {
        return (
            <div className="card">

                <div className="card-image">
                    {!this.context.url && <NewPicture />}

                    {this.context.url &&
                        <figure className="image">
                            <FigureImg src={this.context.url} alt="Placeholder" />
                        </figure>}
                </div>

                {this.context.url &&
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
                    </div>
                    </div>
                }
            </div>
        );
    }
}
