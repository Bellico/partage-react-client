import React, { FunctionComponent, useState } from 'react';
import { DialogConfirm, DialogConfirmProps, DialogServiceData } from 'elements/dialog-confirm';
import { DialogService } from 'services/dialog.service';

type DialogInputProps = DialogConfirmProps<{ value?: string, confirm: boolean }> & {
    value?: string
}

export const DialogInput: FunctionComponent<DialogInputProps> = (props) => {

    const [valueInput, setValueInput] = useState(props.value);

    const handleConfirmDialog = (data: { confirm: boolean }) => {
        props.onConfirm({ ...data, value: valueInput });
    }

    return (
        <DialogConfirm
            textConfirm={props?.textConfirm}
            textCancel={props?.textCancel}
            textTitle={props?.textTitle}
            onConfirm={handleConfirmDialog}>
            <form>
                <div className="field">
                    <div className="control">
                        <input className="input is-medium"
                            type="text"
                            placeholder="Todo's tile"
                            value={valueInput}
                            onChange={(event) => setValueInput(event.target.value)}
                        />
                    </div>
                </div>
            </form>
        </DialogConfirm>
    );
}


type DialogInputData = DialogServiceData & {
    value?: string
}

export class DialogInputService extends DialogService<{ value?: string, confirm: boolean }> {

    constructor(data?: DialogInputData) {
        super();

        this.setDialog(<DialogInput
            value={data?.value}
            textConfirm={data?.textConfirm}
            textCancel={data?.textCancel}
            textTitle={data?.textTitle}
            onConfirm={(value) => this.confirm(value)}>
        </DialogInput>);
    }
}
