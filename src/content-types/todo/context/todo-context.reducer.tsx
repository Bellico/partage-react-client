import { Todo } from 'content-types/todo/todo.model';

export type TodoAction = { type: 'addTodo' } | { type: 'deleteTodo', indexTodo: number };

export type TodoState = {
    todos: Todo[];
    columnsNumber: number;
}

export function todoReducer(state: TodoState, action: TodoAction) {
    switch (action.type) {

        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, { title: 'new todo', tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] }]
            };

        case 'deleteTodo':
            state.todos.splice(action.indexTodo, 1);
            return {
                ...state,
                todos: state.todos
            };

        default:
            throw new Error();
    }
}
