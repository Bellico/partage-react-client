import React from 'react';

import { NoteContentType } from 'content-types/note-content-type/note-content-type';
import { TodoContentType } from 'content-types/todo-content-type/todo-content-type';
import { PictureContentType } from 'content-types/picture-content-type/picture-content-type';
import { LinkContentType } from 'content-types/link-content-type/link-content-type';
import { CarouselContentType } from 'content-types/carousel-content-type/carousel-content-type';

export function getContentTypeByTypeName(typeName: string, value: any) {
    switch (typeName) {
        case 'note':
            return <NoteContentType note={value} />;
        case 'todo':
            return <TodoContentType tasks={[]} />;
        case 'picture':
            return <PictureContentType />;
        case 'link':
            return <LinkContentType />;
        case 'carousel':
            return <CarouselContentType />;
        default:
            break;
    }
}
