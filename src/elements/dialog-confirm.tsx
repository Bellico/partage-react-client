import React, { FunctionComponent } from 'react';

type DialogConfirmProps = {
    textConfirm?: string,
    textCancel?: string,
    textTitle?: string,
    handleCancel: () => void;
    handleConfirm: () => void;
}

export const DialogConfirm: FunctionComponent<DialogConfirmProps> = (props) => (
    <div className="modal is-active" >
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{props.textTitle}</p>
                <button className="delete" aria-label="close" onClick={props.handleCancel}></button>
            </header>
            <section className="modal-card-body">
                {props.children}
            </section>
            <footer className="modal-card-foot">
                {/* <button className="modal-close is-large" aria-label="close"></button> */}
                <button className="button is-primary" onClick={props.handleConfirm}>
                    {props.textConfirm}
                </button>
                <button className="button" onClick={props.handleCancel}>
                    {props.textCancel}
                </button>
            </footer>
        </div>
    </div>
);

DialogConfirm.defaultProps = {
    textConfirm: "Yes",
    textCancel: "No",
    textTitle: 'Are you sure to continue?'
}
