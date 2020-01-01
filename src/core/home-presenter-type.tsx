import React from 'react';

//TODO Content Type
export const Presenter = (props: any) => (
    <div className="presenter">
        <h1>{props.elementType.title} </h1>
        {props.children}
    </div>
);
