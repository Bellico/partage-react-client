import React from 'react';

import { NoteContentType } from 'content-types/note/note';
import { PictureContentType } from 'content-types/picture/picture';
import { LinkContentType } from 'content-types/link/link';
import { CarouselContentType } from 'content-types/carousel/carousel';
import { TodoContentType } from 'content-types/todo';

const ContentTypeDeclaration = [
    { typeName: 'note', contentType: NoteContentType },
    { typeName: 'todo', contentType: TodoContentType },
    { typeName: 'picture', contentType: PictureContentType },
    { typeName: 'link', contentType: LinkContentType },
    { typeName: 'carousel', contentType: CarouselContentType }
];

export function getContentTypeByTypeName(typeName: string, value: any) {
    const Content = ContentTypeDeclaration.find(content => content.typeName === typeName)?.contentType;

    return Content ? <Content /> : null;
}
