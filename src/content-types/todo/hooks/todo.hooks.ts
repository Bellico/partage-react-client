import { useContext } from 'react';
import { TodoContext } from 'content-types/todo/context/todo-context';

export function useTodoOnTheLine(lineNumber: number) {

    const { state: { todos, columnsNumber } } = useContext(TodoContext);

    function* getTodoOnTheLine() {
        let deb = lineNumber * columnsNumber;
        let count = 0;

        while (count < columnsNumber && deb < todos.length) {
            yield todos[deb]
            deb++;
            count++;
        }
    }

    return Array.from(getTodoOnTheLine());
}
