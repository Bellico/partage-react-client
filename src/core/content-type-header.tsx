import React from 'react';

export const ContentTypeHeader = ({ title, description }: { title: string, description: string }) => (
    <div className="has-text-centered">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{description}</p>
    </div>
);
