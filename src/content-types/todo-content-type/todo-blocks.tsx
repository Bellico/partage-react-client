import { FunctionComponent, useState } from "react";
import React from "react";
import { TodoContentType } from "./todo-content-type";
import { Todo } from "./task.model";

export const TodoBlocks: FunctionComponent = () => {

  const todosDefault: Todo[] = [
    { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
    { tasks: [{ label: 'courir', done: false }, { label: 'courir 1', done: false }] },
    { tasks: [{ label: 'voler', done: false }, { label: 'voler 1', done: false }] },
    { tasks: [{ label: 'nager', done: false }, { label: 'nager 1', done: false }] },
    { tasks: [{ label: 'manger', done: false }, { label: 'manger 1', done: false }] },
    { tasks: [{ label: 'dormir', done: false }, { label: 'dormir 1', done: false }] },
    { tasks: [{ label: 'vendre', done: false }, { label: 'vendre 1', done: false }] },
    { tasks: [{ label: 'rendez vous', done: false }, { label: 'rendez vous 1', done: false }] },
  ]

  const [todos, setTodos] = useState<Todo[]>(todosDefault);

  const addTodoHandle = () => {
    setTodos(() => [...todos, { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] }]);
  }

  const NewTodoBlock = () =>
    <div className="column">
      <div className="addTodo" onClick={addTodoHandle}>
        X
      </div>
    </div>;

  const getTodoLine = (lineNumber) => {
    const deb = lineNumber * 3;

    if (deb + 2 < todos.length) {
      return [todos[deb], todos[deb + 1], todos[deb + 2]]
    }
    else if (deb + 1 < todos.length) {
      return [todos[deb], todos[deb + 1]]
    }
    else {
      return [todos[deb]];
    }
  }

  const LineOfTodos = ({ lineNumber }) => {
    const todosOnTheLine = getTodoLine(lineNumber);

    const line = todosOnTheLine.map((todo) =>
      <div key={todos.indexOf(todo)} className="column">
        <TodoContentType tasks={todo.tasks} />
      </div>
    )

    if (todosOnTheLine.length < 3) {
      line.push(<NewTodoBlock key={todos.length} />);
    }

    return (
      <div className="columns">
        {line}
      </div>
    );
  }

  const TodosLines = () => {
    const todosLines = [];
    const maxLine = Math.ceil(todos.length / 3);

    for (let line = 0; line < maxLine; line++) {
      todosLines.push(<LineOfTodos key={line} lineNumber={line} />);
    }

    if (todos.length % 3 === 0) {
      todosLines.push(
        <div key={todos.length} className="columns">
          <NewTodoBlock />
        </div>)
    }

    return <>{todosLines}</>;
  }

  return (
    <>
      <h3 className="title is-3">Todos</h3>
      <TodosLines />
    </>
  );
}
