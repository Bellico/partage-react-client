import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Menu } from './menu';
import { TodoGroup } from 'content-types/todo/todo-group';

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

export const BoardPage: FunctionComponent = () => (
    <WorkContainer>
        <Menu />
        <main>
            <TodoGroup />
        </main>
    </WorkContainer>
)
