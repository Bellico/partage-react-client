import React from 'react';

export const fillColumn = (max: number) => {
    const elem = [];

    for (let i = 1; i < max; i++) {
        elem.push(<div className="column"></div>);
    }

    return elem;
}
