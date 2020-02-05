import React, { FunctionComponent, useContext } from "react";
import { TodoContext } from 'content-types/todo/context/todo-context';
import { useTodoOnTheLine } from 'content-types/todo/hooks/todo.hooks';
import { fillColumn } from 'helpers/utils';
import { NewTodo } from 'content-types/todo/components/new-todo';
import { ConfirmDialogService } from 'elements/confirm-dialog';
import { Todo } from 'content-types/todo/components/todo';

export const TodosLines: FunctionComponent = () => {

    const { state: { todos, columnsNumber }, dispatch } = useContext(TodoContext);

    const todosLines = [];
    const maxLine = Math.ceil(todos.length / columnsNumber);

    for (let line = 0; line < maxLine; line++) {
        todosLines.push(
            <TodosLine key={line} lineNumber={line}>
                <NewTodo addNewTodo={() => dispatch({ type: 'addTodo' })} />
            </TodosLine>);
    }

    if (todos.length % columnsNumber === 0 && todos.length < 9) {
        todosLines.push(
            <div key={todos.length} className="columns">
                <div className="column">
                    <NewTodo addNewTodo={() => dispatch({ type: 'addTodo' })} />
                </div>
                {[...fillColumn(columnsNumber)]}
            </div>)
    }

    return <>{todosLines}</>;
}

const TodosLine: FunctionComponent<{ lineNumber: number }> = ({ lineNumber }) => {

    const { state: { todos, columnsNumber }, dispatch } = useContext(TodoContext);
    const todosOnTheLine = useTodoOnTheLine(lineNumber);

    async function deleteTodo(index: number) {
        const data = await new ConfirmDialogService().show();

        if (data.confirm) {
            dispatch({ type: "deleteTodo", indexTodo: index });
        }
    }

    const line = todosOnTheLine.map((todo) => {
        const index = todos.indexOf(todo);
        return (
            <div key={todo.id} className="column">
                <Todo todo={todo} onDelete={() => deleteTodo(index)} />
            </div>
        )
    })

    if (todosOnTheLine.length < columnsNumber) {
        line.push(
            <div key={todos.length} className="column">
                <NewTodo addNewTodo={() => dispatch({ type: 'addTodo' })} />
            </div>,
            ...fillColumn(columnsNumber - todosOnTheLine.length));
    }

    return (
        <div className="columns">
            {line}
        </div>
    );
}
