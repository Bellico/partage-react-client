import React from 'react';
import { GetCompontentByContentType as GetReactComponentByContentType } from 'helpers/content-type.helper';
import { ContentTypeModel } from 'models/content-type.model';

export class ContentTypeListComponent extends React.Component<{}, { items: ContentTypeModel[] }> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    color: 'light',
                    type: 'note',
                },
                {
                    id: 2,
                    color: 'danger',
                    type: 'note',
                },
                {
                    id: 3,
                    color: 'dark',
                    type: 'note',
                },
                {
                    id: 4,
                    color: 'black',
                    type: 'note',
                },
                {
                    id: 5,
                    color: 'light',
                    type: 'note',
                }
            ]
        }
    }

    addContentTypeItem = () => {
        this.setState({
            items: [...this.state.items, {
                id: 5,
                color: 'light',
                type: 'note'
            }]
        });
    }

    deleteContentTypeItem(indexItem: number) {
        this.setState((state) => {
            state.items.splice(indexItem, 1);
            return { items: state.items }
        });
    }

    get getColorBottom(): string {
        if (this.state.items.length === 0) return 'dark';

        return this.state.items[this.state.items.length - 1].color;
    }

    render() {
        return (
            <main>
                {this.state.items.map((contentType, index) =>
                    <section key={index} className={`hero is-large is-${contentType.color}`}>
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-11"> </div>
                                    <div className="column">
                                        <span
                                            className="icon action is-medium"
                                            onClick={() => this.deleteContentTypeItem(index)}>
                                            <i className="fas fa-trash-alt fa-2x"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="has-text-centered">
                                            <h2 className="title">Note</h2>
                                            <p className="subtitle">Enter some texte to share a note</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        {GetReactComponentByContentType(contentType.type)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
                }
                <section className={`hero is-large is-${this.getColorBottom}`}>
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <span
                                    className="icon action is-large has-text-centered"
                                    onClick={this.addContentTypeItem}>
                                    <i className="fas fa-plus-circle fa-3x"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
