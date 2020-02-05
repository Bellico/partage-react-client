import React, { FunctionComponent } from "react";
import { TodosLines } from 'content-types/todo/components/todo-lines';
import { TodoContextProvider, TodoContextProviderProps } from 'content-types/todo/context/todo-context.provider';
import { EnvironnementContent } from 'models/environnement-content.model';
import { Todo } from 'content-types/todo/components/todo';


export type TodoContentTypeProps = TodoContextProviderProps & {
  environnement: EnvironnementContent
}

export const TodoContentType: FunctionComponent<TodoContentTypeProps> = ({ value, environnement }) => (
  <>
    <h3 className="title is-3">Todos</h3>

    <TodoContextProvider value={value} >
      {environnement.display === 'home' && <Todo todo={{ tasks: [] }} />}
      {environnement.display === 'board' && <TodosLines />}
    </TodoContextProvider>

  </>
);

