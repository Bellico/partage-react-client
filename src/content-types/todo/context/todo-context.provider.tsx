import React, { useReducer, FunctionComponent } from "react";
import { Todo } from "../todo.model";
import { TodoContext } from 'content-types/todo/context/todo-context';
import { todoReducer } from 'content-types/todo/context/todo-context.reducer';

const todosDefault: Todo[] = [
    { id: 1, tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
    { id: 12, tasks: [{ label: 'courir', done: false }, { label: 'courir 1', done: false }] },
    { id: 13, tasks: [{ label: 'voler', done: false }, { label: 'voler 1', done: false }] },
    { id: 14, tasks: [{ label: 'nager', done: false }, { label: 'nager 1', done: false }] },
    { id: 15, tasks: [{ label: 'rendez vous', done: false }, { label: 'rendez vous 1', done: false }] },
]

export const TodoContextProvider: FunctionComponent = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, { todos: todosDefault, columnsNumber: 3 });

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}
