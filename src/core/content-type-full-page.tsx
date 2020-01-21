import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Menu } from './menu';
import { TodoBlocks } from 'content-types/todo-content-type/todo-blocks';

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

export const ContentTypeFullPage: FunctionComponent = () => (
    <WorkContainer>
        <Menu />
        <main>
            <TodoBlocks />
        </main>
    </WorkContainer>
)