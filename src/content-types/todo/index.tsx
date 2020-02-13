import React, { useContext } from "react";
import { TodosLines } from 'content-types/todo/components/todo-lines';
import { TodoContextProvider } from 'content-types/todo/context/todo-context.provider';
import { Todo } from 'content-types/todo/components/todo';
import { EnvContext, ContentContext } from 'app-context/app-context';
import { TodoContentValueModel } from 'content-types/todo/models/todo.model';

export const TodoContentType = () => {

  const { display } = useContext(EnvContext);
  const value = useContext<TodoContentValueModel>(ContentContext);

  return (
    <>
      <TodoContextProvider value={value} >
        {display === 'home' && <Todo todo={value.todos[0]} />}

        {display === 'board' &&
          <>
            <h3 className="title is-3">Todos</h3>
            <TodosLines />
          </>
        }
      </TodoContextProvider>

    </>
  );
}


