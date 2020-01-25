import React, { Dispatch } from 'react';
import { TodoState, TodoAction } from 'content-types/todo/context/todo-context.reducer';

export interface ITodoContext {
    state: TodoState,
    dispatch: Dispatch<TodoAction>;
}

export const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);
