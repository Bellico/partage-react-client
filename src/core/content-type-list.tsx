import React from 'react';
import { getContentTypeByTypeName, getMetaDataType } from 'helpers/content-type.helper';
import { ContentTypeModel } from 'models/content-type.model';
import { AddingContentSection } from 'core/adding-content-section';
import { ContentTypeHeader } from 'core/content-type-header';
import { Icon } from 'elements/icon';
import { Select } from 'elements/select';

export class ContentTypesList extends React.Component<{}, { items: ContentTypeModel[] }> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    colorName: 'light',
                    typeName: 'note',
                },
                {
                    id: 2,
                    colorName: 'danger',
                    typeName: 'note',
                },
                {
                    id: 3,
                    colorName: 'dark',
                    typeName: 'note',
                },
                {
                    id: 4,
                    colorName: 'black',
                    typeName: 'todo',
                },
                {
                    id: 5,
                    colorName: 'light',
                    typeName: 'picture',
                }
            ]
        }
    }

    addContentTypeItem = () => {
        this.setState({
            items: [...this.state.items, {
                id: 5,
                colorName: 'light',
                typeName: 'note'
            }]
        });
    }

    deleteContentTypeItem(indexItem: number) {
        this.setState((state) => {
            state.items.splice(indexItem, 1);
            return { items: state.items }
        });
    }

    changeColorItem(indexItem: number, colorName: string) {
        this.setState((state) => {
            state.items[indexItem].colorName = colorName;
            return { items: state.items }
        });
    }

    changeTypeItem(indexItem: number, typeName: string) {
        this.setState((state) => {
            state.items[indexItem].typeName = typeName;
            return { items: state.items }
        });
    }

    get getColorBottom(): string {
        if (this.state.items.length === 0) return 'dark';

        return this.state.items[this.state.items.length - 1].colorName;
    }

    getContentTypeHeader(typeName: string) {
        const { title, description } = getMetaDataType(typeName);

        return <ContentTypeHeader
            title={title}
            description={description} />
    }

    getContentType(typeName: string) {
        return getContentTypeByTypeName(typeName)
    }

    render() {
        return (
            <main>
                {this.state.items.map((contentType, index) =>
                    <section key={index} className={`hero is-medium is-${contentType.colorName}`}>
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns is-mobile">
                                    <div className="column is-2">
                                        <Select
                                            icon="server"
                                            options={['note', 'todo', 'picture']}
                                            value={contentType.typeName}
                                            onChange={(value) => this.changeTypeItem(index, value)} />
                                    </div>
                                    <div className="column is-2">
                                        <Select
                                            icon="palette"
                                            options={['light', 'danger', 'black', 'dark']}
                                            value={contentType.colorName}
                                            onChange={(value) => this.changeColorItem(index, value)} />
                                    </div>
                                    <div className="column is-7"></div>
                                    <div className="column is-1">
                                        <Icon
                                            className="is-medium fa-pull-right"
                                            isAction
                                            onClick={() => this.deleteContentTypeItem(index)}>trash-alt fa-2x</Icon>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        {this.getContentTypeHeader(contentType.typeName)}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        {this.getContentType(contentType.typeName)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
                }

                <AddingContentSection
                    colorName={this.getColorBottom}
                    onClickAddingButton={this.addContentTypeItem} />
            </main>
        );
    }
}
