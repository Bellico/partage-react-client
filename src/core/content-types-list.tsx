import React from 'react';
import { getContentTypeByTypeName } from 'helpers/content-type.helper';
import { ContentTypeModel } from 'models/content-type.model';
import { AddingContentSection } from 'core/adding-content-section';
import { Icon } from 'elements/icon';
import { Select, OptionModel } from 'elements/select';
import { NavLink } from 'react-router-dom';

export class ContentTypesList extends React.Component<{}, { items: ContentTypeModel[], configurationDisplayedFor: number[] }> {

    constructor(props) {
        super(props);
        this.state = {
            configurationDisplayedFor: [],
            items: [
                {
                    id: 1,
                    colorName: 'light',
                    typeName: 'note',
                    size: 'medium'
                },
                {
                    id: 2,
                    colorName: 'danger',
                    typeName: 'note',
                    size: 'medium'
                },
                {
                    id: 3,
                    colorName: 'dark',
                    typeName: 'note',
                    size: 'medium'
                },
                {
                    id: 4,
                    colorName: 'black',
                    typeName: 'todo',
                    size: 'medium'
                },
                {
                    id: 5,
                    colorName: 'light',
                    typeName: 'link',
                    size: 'medium'
                }
            ]
        }
    }

    addContentTypeItem = () => {
        this.setState({
            items: [...this.state.items, {
                id: 5,
                colorName: 'light',
                typeName: 'note',
                size: 'medium'
            }]
        });
    }

    deleteContentTypeItem(indexItem: number) {
        this.setState((state) => {
            state.items.splice(indexItem, 1);

            return { items: state.items }
        });
    }

    changePropertyContentTypeItem(indexItem: number, propertyName: string, valueName: string) {
        this.setState((state) => {
            state.items[indexItem][propertyName] = valueName;

            return { items: state.items }
        });
    }

    toggleConfigurationDisplayedFor(indexItem: number) {
        if (this.isConfigurationDisplayedFor(indexItem)) {
            this.setState((state) => {
                const index = state.configurationDisplayedFor.indexOf(indexItem);
                state.configurationDisplayedFor.splice(index, 1);

                return { configurationDisplayedFor: state.configurationDisplayedFor }
            });
        } else {
            this.setState({
                configurationDisplayedFor: this.state.configurationDisplayedFor.concat(indexItem)
            });
        }
    }

    isConfigurationDisplayedFor(index: number): boolean {
        return this.state.configurationDisplayedFor.filter(c => c === index).length > 0;
    }

    getContentType(typeName: string) {
        return getContentTypeByTypeName(typeName)
    }

    getHeaderSection(index: number, item: ContentTypeModel): React.ReactNode {
        return (
            <div className="container">
                <div className="level is-mobile">
                    <div className="level-item">
                        <Icon
                            className="is-medium"
                            isAction
                            onClick={() => this.toggleConfigurationDisplayedFor(index)}>cogs fa-2x</Icon>

                        <NavLink to="/hello/1" style={{ color: 'inherit' }}>
                            <Icon className="is-medium">expand fa-2x</Icon>
                        </NavLink>

                        <Icon
                            className="is-medium"
                            isAction
                            onClick={() => this.deleteContentTypeItem(index)}>trash-alt fa-2x</Icon>
                    </div>
                </div>

                {this.getConfiguration(index, item)}
            </div>
        );
    }

    getConfiguration(index: number, item: ContentTypeModel): React.ReactNode {
        if (!this.isConfigurationDisplayedFor(index)) return null;

        return (
            <div className="level">
                <div className="level-item">
                    <Select
                        icon="server"
                        label="Type"
                        style={{ color: item.colorName, size: 'large' }}
                        options={['note', 'todo', 'picture', 'link', 'carousel'].map(o => new OptionModel(o))}
                        value={item.typeName}
                        onChange={(value) => this.changePropertyContentTypeItem(index, 'typeName', value)} />

                    <Select
                        icon="palette"
                        label="Color"
                        style={{ color: item.colorName, size: 'large' }}
                        options={['white', 'light', 'danger', 'black', 'dark', 'green'].map(o => new OptionModel(o))}
                        value={item.colorName}
                        onChange={(value) => this.changePropertyContentTypeItem(index, 'colorName', value)} />

                    <Select
                        icon="expand"
                        label="Size"
                        style={{ color: item.colorName, size: 'large' }}
                        options={['small', 'medium', 'large', 'fullheight'].map(o => new OptionModel(o))}
                        value={item.size}
                        onChange={(value) => this.changePropertyContentTypeItem(index, 'size', value)} />
                </div>
            </div>);
    }

    render() {
        return (
            <main>
                {this.state.items.map((contentType, index) =>
                    <section key={index} className={`section hero is-${contentType.size} is-${contentType.colorName}`}>
                        <div className="hero-head">
                            {this.getHeaderSection(index, contentType)}
                        </div>
                        <div className="hero-body">
                            <div className="container">
                                {this.getContentType(contentType.typeName)}
                            </div>
                        </div>
                    </section>)
                }

                <AddingContentSection onClickAddingButton={this.addContentTypeItem} />
            </main>
        );
    }
}
