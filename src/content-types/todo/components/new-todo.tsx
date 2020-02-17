import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const NewTodoBlock = styled.div`
    cursor: pointer;
    min-height: 9.5em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
`;

export const NewTodo: FunctionComponent<{ addNewTodo: () => void }> = ({ addNewTodo }) => (
    <NewTodoBlock className="panel" onClick={addNewTodo}>
        <span className="icon action is-large">
            <i className="fas fa-plus-circle fa-3x"></i>
        </span>
    </NewTodoBlock>
);
