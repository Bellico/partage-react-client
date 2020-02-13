import React from 'react';
import styled from 'styled-components';
import { Menu } from './menu';
import { defaultValues } from 'models/default-values';
import { getContentTypeByTypeName } from 'helpers/content-type.helper';
import { useParams } from 'react-router-dom';
import { ContentContext } from 'app-context/app-context';

const WorkContainer = styled.div`
    background: #f4f6f8;
    min-height: 100vh;
    display: flex;
    color: #333;

    main{
        flex: auto;
        padding: 2em;
    }
`;


const menuItems = [{
    id: 1,
    label: 'My share',
    contents: defaultValues.map(d => ({ id: d.id, typeName: d.typeName }))
}]

export const BoardPage = () => {

    const { boardId, contentId } = useParams();

    const board = menuItems.find(b => b.id === +(boardId || 0));
    let content = null;

    if (contentId) {
        content = defaultValues.find(d => d.id === +contentId);
    }

    return (
        <WorkContainer>
            <Menu projects={menuItems} />
            {content && <main key={content.id}>
                <ContentContext.Provider value={content.value} >
                    {getContentTypeByTypeName(content.typeName, content.value)}
                </ContentContext.Provider>
            </main>}
        </WorkContainer>
    );
}
