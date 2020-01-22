import React from 'react';

import { NoteContentType } from 'content-types/note/note';
import { TodoContentType } from 'content-types/todo/todo';
import { PictureContentType } from 'content-types/picture/picture';
import { LinkContentType } from 'content-types/link/link';
import { CarouselContentType } from 'content-types/carousel/carousel';

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
