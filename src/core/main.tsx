import React from 'react';
import { GetCompontentByContentType as GetComponentByContentType } from 'helpers/content-type.helper';

export function Main() {

    const contentTypeList = [
        {
            id: 1,
            color: 'light',
            type: 'note',
        },
        {
            id: 2,
            color: 'danger',
            type: 'note',
        },
        {
            id: 3,
            color: 'dark',
            type: 'note',
        },
        {
            id: 4,
            color: 'black',
            type: 'note',
        },
        {
            id: 5,
            color: 'light',
            type: 'note',
        }
    ]

    return (
        <main>
            {contentTypeList.map((contentType) =>
                <section key={contentType.id} className={`hero is-large is-${contentType.color} is-bold`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <div className="has-text-centered">
                                        <h2 className="title">Note Content type</h2>
                                        <p className="subtitle">Enter some texte to share a note</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    {GetComponentByContentType(contentType.type)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}
        </main>
    )
}
