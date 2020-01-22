import { FunctionComponent, useState, MouseEventHandler } from "react";
import React from "react";
import { TodoContentType } from "./todo";
import { Todo } from "./todo.model";

const todosDefault: Todo[] = [
  { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
  { tasks: [{ label: 'courir', done: false }, { label: 'courir 1', done: false }] },
  { tasks: [{ label: 'voler', done: false }, { label: 'voler 1', done: false }] },
  { tasks: [{ label: 'nager', done: false }, { label: 'nager 1', done: false }] },
  { tasks: [{ label: 'rendez vous', done: false }, { label: 'rendez vous 1', done: false }] },
]

const columnsNumber = 3;

export const TodoGroup: FunctionComponent = () => {

  const [todos, setTodos] = useState<Todo[]>(todosDefault);

  function handleAddingTodo() {
    setTodos(() =>
      [
        ...todos,
        { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] }
      ]
    );
  }

  return (
    <>
      <h3 className="title is-3">Todos</h3>
      <TodosLines todos={todos} addNewTodo={handleAddingTodo} />
    </>
  );
}

const TodosLines: FunctionComponent<{ todos: Todo[], addNewTodo: MouseEventHandler }> = ({ todos, addNewTodo }) => {
  const todosLines = [];
  const maxLine = Math.ceil(todos.length / columnsNumber);

  for (let line = 0; line < maxLine; line++) {
    todosLines.push(<TodosLine key={line} todos={todos} lineNumber={line} addNewTodo={addNewTodo} />);
  }

  if (todos.length % columnsNumber === 0 && todos.length < 9) {
    todosLines.push(
      <div key={todos.length} className="columns">
        <NewTodo addNewTodo={addNewTodo} />
      </div>)
  }

  return <>{todosLines}</>;
}

const TodosLine: FunctionComponent<{ todos: Todo[], lineNumber: number, addNewTodo: MouseEventHandler }> = ({ todos, lineNumber, addNewTodo }) => {

  function getTodoLine(lineNumber: number) {
    const deb = lineNumber * columnsNumber;

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

  const todosOnTheLine = getTodoLine(lineNumber);

  const line = todosOnTheLine.map((todo) =>
    <div key={todos.indexOf(todo)} className="column">
      <TodoContentType tasks={todo.tasks} />
    </div>
  )

  if (todosOnTheLine.length < columnsNumber) {
    line.push(<NewTodo key={todos.length} addNewTodo={addNewTodo} />);
  }

  return (
    <div className="columns">
      {line}
    </div>
  );
}

const NewTodo: FunctionComponent<{ addNewTodo: MouseEventHandler }> = ({ addNewTodo }) => (
  <div className="column">
    <div className="addTodo" onClick={addNewTodo}>
      X
   </div>
  </div>
);
