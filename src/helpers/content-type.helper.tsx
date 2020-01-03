import React from 'react';
import { NoteContentType } from 'content-types/note-content-type/note-content-type';
import { TodoContentType } from 'content-types/todo-content-type/todo-content-type';
import { PictureContentType } from 'content-types/picture-content-type/picture-content-type';

const typeList: {
    typeName: string
    title: string
    description: string
}[] = [
        {
            typeName: 'note',
            title: 'Note',
            description: 'Enter some texte to share a note'
        },
        {
            typeName: 'todo',
            title: 'Todo List',
            description: 'Add some tasks to complete'
        },
        {
            typeName: 'picture',
            title: '',
            description: ''
        }
    ];

export function getContentTypeByTypeName(typeName: string) {
    switch (typeName) {
        case 'note':
            return <NoteContentType />;
        case 'todo':
            return <TodoContentType />;
        case 'picture':
            return <PictureContentType />;
        default:
            break;
    }
}

export function getMetaDataType(typeName: string): { title: string, description: string } {
    const element = typeList.find(t => t.typeName === typeName);

    if (!element) {
        throw Error('type not define');
    }

    return { title: element.title, description: element.description };
}
