import React, { FunctionComponent } from 'react';
import { DialogService } from 'services/dialog.service';

export type ConfirmDialogProps<T = { confirm: boolean }> = {
    textConfirm?: string,
    textCancel?: string,
    textTitle?: string,
    onConfirm: (data: T) => void;
}

export const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = (props) => (
    <div className="modal is-active">
        <div className="modal-background" onClick={() => props.onConfirm({ confirm: false })}></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{props.textTitle}</p>
                <button className="delete" aria-label="close" onClick={() => props.onConfirm({ confirm: false })}></button>
            </header>
            <section className="modal-card-body">
                {props.children}
            </section>
            <footer className="modal-card-foot">
                {/* <button className="modal-close is-large" aria-label="close"></button> */}
                <button className="button is-primary" onClick={() => props.onConfirm({ confirm: true })}>
                    {props.textConfirm}
                </button>
                <button className="button" onClick={() => props.onConfirm({ confirm: false })}>
                    {props.textCancel}
                </button>
            </footer>
        </div>
    </div>
);

ConfirmDialog.defaultProps = {
    textConfirm: "Yes",
    textCancel: "No",
    textTitle: 'Are you sure to continue?'
}

export type DialogServiceData = {
    textConfirm?: string,
    textCancel?: string,
    textTitle?: string,
}

export class ConfirmDialogService extends DialogService {

    constructor(data?: DialogServiceData) {
        super();

        this.setDialog(<ConfirmDialog
            textConfirm={data?.textConfirm}
            textCancel={data?.textCancel}
            textTitle={data?.textTitle}
            onConfirm={(value) => this.confirm(value)}>
        </ConfirmDialog>);
    }
}
