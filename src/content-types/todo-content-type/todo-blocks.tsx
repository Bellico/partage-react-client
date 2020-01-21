import { FunctionComponent, useState } from "react";
import React from "react";
import { TodoContentType } from "./todo-content-type";
import { Todo } from "./task.model";

export const TodoBlocks: FunctionComponent = () => {

  const todosDefault: Todo[] = [
    { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
    { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
    { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
  ]

  const [todos, setTodos] = useState<Todo[]>(todosDefault);

  const addTodoHandle = () => {
    setTodos(() => [...todos, { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] }]);
  }

  const getLineNumberToDisplay = () => {
    return Math.floor(todos.length / 3);
  }

  const getSliceTodos = (lineNumber) => {
    return todos.slice(3 * lineNumber, 3);
  }

  return (
    <>
      <h3 className="title is-3">Todos</h3>

      <div className="columns">
        {todos.map((todo, index) =>
          <div key={index} className="column">
            <TodoContentType tasks={todo.tasks} />
          </div>
        )}
      </div>

      <div className="addTodo" onClick={addTodoHandle}>
        X
      </div>
    </>
  );
}