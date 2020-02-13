export const defaultValues = [
    {
        id: 1,
        colorName: 'light',
        typeName: 'todo',
        size: 'medium',
        value: {
            todos: [
                { id: 1, title: 'mon todo', tasks: [{ label: 'oui', done: false }, { label: 'oui 1', done: false }] },
                { id: 12, tasks: [{ label: 'courir', done: false }, { label: 'courir 1', done: false }] },
                { id: 13, tasks: [{ label: 'voler', done: false }, { label: 'voler 1', done: false }] },
                { id: 14, tasks: [{ label: 'nager', done: false }, { label: 'nager 1', done: false }] },
                { id: 15, tasks: [{ label: 'rendez vous', done: false }, { label: 'rendez vous 1', done: false }] },
            ],
            columnsNumber: 3
        }
    },
    {
        id: 2,
        colorName: 'danger',
        typeName: 'note',
        size: 'medium',
        value: null
    },
    {
        id: 3,
        colorName: 'dark',
        typeName: 'note',
        size: 'medium',
        value: {
            title: 'hello',
            note: 'note2'
        }
    },
    {
        id: 4,
        colorName: 'black',
        typeName: 'todo',
        size: 'medium',
        value: {
            todos: [],
            columnsNumber: 1
        }
    },
    {
        id: 5,
        colorName: 'light',
        typeName: 'link',
        size: 'medium',
        value: null
    }
];
