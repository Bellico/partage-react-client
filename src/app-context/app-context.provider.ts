import { IAppContext } from 'app-context/app-context';
import { ContentTypeModel } from 'models/content-type.model';

export class AppContextProvider implements IAppContext {

    constructor(
        private _contentTypeItems: ContentTypeModel[],
        private _setContentTypeItems: (value: ContentTypeModel[]) => void) {
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
        (this._contentTypeItems[indexItem] as any)[propertyName] = valueName;
        this._setContentTypeItems([...this._contentTypeItems]);
    }
}
