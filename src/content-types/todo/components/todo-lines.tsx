import React, { FunctionComponent, useContext } from "react";
import { TodoContentType } from "./todo";
import { TodoContext } from 'content-types/todo/context/todo-context';
import { dialogService } from 'services/dialog-confirm.service';
import { useTodoOnTheLine } from 'content-types/todo/todo.hooks';
import { fillColumn } from 'helpers/utils';

export const TodosLines: FunctionComponent = ({ children }) => {

    const { state: { todos, columnsNumber } } = useContext(TodoContext);

    const todosLines = [];
    const maxLine = Math.ceil(todos.length / columnsNumber);

    for (let line = 0; line < maxLine; line++) {
        todosLines.push(
            <TodosLine key={line} lineNumber={line}>
                {children}
            </TodosLine>);
    }

    if (todos.length % columnsNumber === 0 && todos.length < 9) {
        todosLines.push(
            <div key={todos.length} className="columns">
                <div className="column">
                    {children}
                </div>
                {[...fillColumn(columnsNumber)]}
            </div>)
    }

    return <>{todosLines}</>;
}

const TodosLine: FunctionComponent<{ lineNumber: number }> = ({ children, lineNumber }) => {

    const { state: { todos, columnsNumber }, dispatch } = useContext(TodoContext);
    const todosOnTheLine = useTodoOnTheLine(lineNumber);

    async function deleteTodo(index: number) {
        if (await dialogService().show()) {
            dispatch({ type: "deleteTodo", indexTodo: index });
        }
    }

    const line = todosOnTheLine.map((todo) => {
        const index = todos.indexOf(todo);
        return (
            <div key={index} className="column">
                <TodoContentType todo={todo} onDelete={() => deleteTodo(index)} />
            </div>
        )
    })

    if (todosOnTheLine.length < columnsNumber) {
        line.push(
            <div className="column">
                {children}
            </div>,
            ...fillColumn(columnsNumber - todosOnTheLine.length));
    }

    return (
        <div className="columns">
            {line}
        </div>
    );
}
