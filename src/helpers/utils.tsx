import React from 'react';

export const fillColumn = (max: number) => {
    const elem = [];

    for (let i = 1; i < max; i++) {
        const id = Math.random().toString(10).substr(2, 4);
        elem.push(<div key={id} className="column"></div>);
    }

    return elem;
}
