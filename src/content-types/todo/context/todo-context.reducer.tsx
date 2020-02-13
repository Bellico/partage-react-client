import { TodoContentValueModel } from 'content-types/todo/models/todo.model';

export type TodoAction =
    { type: 'addTodo' }
    | { type: 'deleteTodo', indexTodo: number };


export function todoReducer(state: TodoContentValueModel, action: TodoAction) {
    switch (action.type) {

        case 'addTodo':
            const id = Math.random().toString(10).substr(2, 4);

            return {
                ...state,
                todos: [...state.todos, { id, title: 'new todo', tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] }]
            } as TodoContentValueModel;

        case 'deleteTodo':
            state.todos.splice(action.indexTodo, 1);

            return {
                ...state,
                todos: state.todos
            } as TodoContentValueModel

        default:
            throw new Error();
    }
}
