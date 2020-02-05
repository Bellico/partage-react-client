import React, { useReducer, FunctionComponent } from "react";
import { TodoContext } from 'content-types/todo/context/todo-context';
import { todoReducer } from 'content-types/todo/context/todo-context.reducer';
import { TodoModel } from 'content-types/todo/models/todo.model';

export type TodoContextProviderProps = {
    value: {
        todos: TodoModel[],
        columnsNumber: number;
    }
}

export const TodoContextProvider: FunctionComponent<TodoContextProviderProps> = ({ value, children }) => {

    const [state, dispatch] = useReducer(todoReducer, value);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}
