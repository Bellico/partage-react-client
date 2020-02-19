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
        colorName: 'black',
        typeName: 'todo',
        size: 'medium',
        value: {
            todos: [],
            columnsNumber: 1
        }
    },


    // Note
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
        colorName: 'danger',
        typeName: 'note',
        size: 'medium',
        value: null
    },


    // Link
    {
        id: 5,
        colorName: 'light',
        typeName: 'link',
        size: 'medium',
        value: {
            link: 'http://localhost:3000/board/1/content/6'
        }
    },
    {
        id: 6,
        colorName: 'light',
        typeName: 'link',
        size: 'medium',
        value: {
            link: 'www.google.fr'
        }
    },

    // Picture
    {
        id: 7,
        colorName: 'light',
        typeName: 'picture',
        size: 'medium',
        value: {
            url: 'https://picsum.photos/200/300'
        }
    },
    {
        id: 8,
        colorName: 'light',
        typeName: 'picture',
        size: 'medium',
        value: {
            url: 'https://images6.alphacoders.com/405/405481.jpg'
        }
    },
    {
        id: 88,
        colorName: 'light',
        typeName: 'picture',
        size: 'medium',
        value: {
            url: 'https://i.picsum.photos/id/399/760/500.jpg?grayscale'
        }
    },
    {
        id: 888,
        colorName: 'light',
        typeName: 'picture',
        size: 'medium',
        value: {

        }
    },


    // Carrousel
    {
        id: 9,
        colorName: 'light',
        typeName: 'carousel',
        size: 'medium',
        value: null
    },
    {
        id: 10,
        colorName: 'light',
        typeName: 'carousel',
        size: 'medium',
        value: null
    }
];
