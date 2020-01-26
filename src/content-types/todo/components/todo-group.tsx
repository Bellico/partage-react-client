import React from "react";
import { TodosLines } from 'content-types/todo/components/todo-lines';
import { TodoContextProvider } from 'content-types/todo/context/todo-context.provider';

export const TodoGroup = () => (
  <>
    <h3 className="title is-3">Todos</h3>
    <TodoContextProvider>
      <TodosLines />
    </TodoContextProvider>
  </>
);

