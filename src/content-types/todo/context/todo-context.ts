import React, { Dispatch } from 'react';
import { TodoAction } from 'content-types/todo/context/todo-context.reducer';
import { TodoContentValueModel } from 'content-types/todo/models/todo.model';

export interface ITodoContext {
    state: TodoContentValueModel,
    dispatch: Dispatch<TodoAction>;
}

export const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);
