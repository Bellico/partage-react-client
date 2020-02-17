import React from 'react';
import { getContentTypeByTypeName } from 'helpers/content-type.helper';
import { ContentTypeModel } from 'models/content-type.model';
import { AddingContentSection } from 'core/adding-content-section';
import { IconButton } from 'elements/icon';
import { Select, OptionModel } from 'elements/select';
import { NavLink } from 'react-router-dom';
import { ContentTypeContext, ContentContext } from 'app-context/app-context';

export class ContentTypesList extends React.Component<{}, { configurationDisplayedFor: number[] }> {

    static contextType = ContentTypeContext;
    context!: React.ContextType<typeof ContentTypeContext>;

    state = {
        configurationDisplayedFor: [],
    }

    //#region ContentTypeContext
    get contentTypeItems(): ContentTypeModel[] {
        return this.context.items;
    }

    addContentTypeItem = () => {
        this.context.addItem();
    }

    deleteContentTypeItem(indexItem: number) {
        this.context.deleteItem(indexItem);
    }

    changePropertyContentTypeItem(indexItem: number, propertyName: string, valueName: string) {
        this.context.changePropertyItem(indexItem, propertyName, valueName);
    }
    //#endregion

    toggleConfigurationDisplayedFor(indexItem: number) {
        if (this.isConfigurationDisplayedFor(indexItem)) {
            this.setState((state) => {
                const index = state.configurationDisplayedFor.indexOf(indexItem);
                state.configurationDisplayedFor.splice(index, 1);

                return { configurationDisplayedFor: state.configurationDisplayedFor }
            });
        } else {
            this.setState(state => {
                state.configurationDisplayedFor.push(indexItem);

                return { configurationDisplayedFor: state.configurationDisplayedFor }
            });
        }
    }

    isConfigurationDisplayedFor(index: number): boolean {
        return this.state.configurationDisplayedFor.filter(c => c === index).length > 0;
    }

    getContentType(item: ContentTypeModel) {
        return getContentTypeByTypeName(item.typeName, item.value)
    }

    getHeaderSection(index: number, item: ContentTypeModel): React.ReactNode {
        return (
            <div className="container">
                <div className="level is-mobile">
                    <div className="level-item">
                        <IconButton onClick={() => this.toggleConfigurationDisplayedFor(index)}>cogs fa-2x</IconButton>

                        <NavLink to={`/board/1/content/${item.id}`} style={{ color: 'inherit' }}>
                            <IconButton>expand fa-2x</IconButton>
                        </NavLink>

                        <IconButton onClick={() => this.deleteContentTypeItem(index)}>trash-alt fa-2x</IconButton>
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
                {this.contentTypeItems.map((contentType, index) =>
                    <section key={contentType.id} className={`section hero is-${contentType.size} is-${contentType.colorName}`}>
                        <div className="hero-head">
                            {this.getHeaderSection(index, contentType)}
                        </div>
                        <div className="hero-body">
                            <div className="container">
                                <ContentContext.Provider value={contentType.value} >
                                    {this.getContentType(contentType)}
                                </ContentContext.Provider>
                            </div>
                        </div>
                    </section>)
                }

                <AddingContentSection onClickAddingButton={this.addContentTypeItem} />
            </main>
        );
    }
}
