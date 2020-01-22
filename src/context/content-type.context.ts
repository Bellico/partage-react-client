import React from 'react';
import { ContentTypeModel } from 'models/content-type.model';

export interface IContentTypeContext {

    readonly items: ContentTypeModel[];

    addItem(): void;

    deleteItem(indexItem: number): void;

    changePropertyItem(indexItem: number, propertyName: string, valueName: string): void;

}

export const ContentTypeContext = React.createContext<IContentTypeContext>({} as IContentTypeContext);
