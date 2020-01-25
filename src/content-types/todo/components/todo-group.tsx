import React, { useReducer } from "react";
import { Todo } from "../todo.model";
import { TodoContext } from 'content-types/todo/context/todo-context';
import { todoReducer } from 'content-types/todo/context/todo-context.reducer';
import { NewTodo } from 'content-types/todo/components/new-todo';
import { TodosLines } from 'content-types/todo/components/todo-lines';

const todosDefault: Todo[] = [
  { tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
  { tasks: [{ label: 'courir', done: false }, { label: 'courir 1', done: false }] },
  { tasks: [{ label: 'voler', done: false }, { label: 'voler 1', done: false }] },
  { tasks: [{ label: 'nager', done: false }, { label: 'nager 1', done: false }] },
  { tasks: [{ label: 'rendez vous', done: false }, { label: 'rendez vous 1', done: false }] },
]

export const TodoGroup = () => {

  const [state, dispatch] = useReducer(todoReducer, { todos: todosDefault, columnsNumber: 3 });

  return (
    <>
      <h3 className="title is-3">Todos</h3>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodosLines>
          <NewTodo addNewTodo={() => dispatch({ type: 'addTodo' })} />
        </TodosLines>
      </TodoContext.Provider>
    </>
  );
}
