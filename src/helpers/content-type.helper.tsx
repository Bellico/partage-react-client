import React from 'react';

import { NoteContentType } from 'content-types/note/note';
import { PictureContentType } from 'content-types/picture/picture';
import { LinkContentType } from 'content-types/link/link';
import { CarouselContentType } from 'content-types/carousel/carousel';
import { EnvironnementContent } from 'models/environnement-content.model';
import { TodoContentType } from 'content-types/todo';

export function getContentTypeByTypeName(typeName: string, value: any, env: EnvironnementContent) {
    switch (typeName) {
        case 'note':
            return <NoteContentType note={value} />;
        case 'todo':
            return <TodoContentType value={value} environnement={env} />;
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
