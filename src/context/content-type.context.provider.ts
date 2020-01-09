import { IContentTypeContext } from 'context/content-type.context';
import { ContentTypeModel } from 'models/content-type.model';

export class ContentTypeContextProvider implements IContentTypeContext {

    constructor(private _contentTypeItems, private _setContentTypeItems) {
    }

    get items(): ContentTypeModel[] {
        return this._contentTypeItems;
    }

    addItem(): void {
        this._setContentTypeItems([...this._contentTypeItems, {
            id: 5,
            colorName: 'light',
            typeName: 'note',
            size: 'medium',
            value: null
        }]);
    }

    deleteItem(indexItem: number): void {
        this._contentTypeItems.splice(indexItem, 1);
        this._setContentTypeItems([...this.items]);
    }

    changePropertyItem(indexItem: number, propertyName: string, valueName: string) {
        this._contentTypeItems[indexItem][propertyName] = valueName;
        this._setContentTypeItems([...this._contentTypeItems]);
    }
}
