import React from 'react';
import styled from 'styled-components';
import { Menu } from './menu';
import { defaultValues } from 'models/default-values';
import { getContentTypeByTypeName } from 'helpers/content-type.helper';

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

const element = defaultValues[0];

const menuItems = [{
    id: 1,
    label: 'My share',
    contents: [
        {
            id: 1,
            type: 'Todo'
        }
    ]
}]

export const BoardPage = () => (
    <WorkContainer>
        <Menu projects={menuItems} />
        <main>
            {getContentTypeByTypeName(element.typeName, element.value, { display: 'board' })}
        </main>
    </WorkContainer>
)
