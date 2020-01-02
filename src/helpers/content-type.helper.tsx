import React from 'react';
import { NoteContentTypeComponent } from 'content-types/note-content-type/note-content-type.component';

export function GetCompontentByContentType(type: string) {
    switch (type) {
        case 'note':
            return <NoteContentTypeComponent />;
        default:
            break;
    }
}
