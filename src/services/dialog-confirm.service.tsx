import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { DialogConfirm } from 'elements/dialog-confirm';

type DialogServiceData = {
    textConfirm?: string,
    textCancel?: string
    child: ReactNode
}

export function dialogService(data?: DialogServiceData) {
    return {
        show: () => {

            const el = document.createElement('div');
            el.classList.add('dialog-app');

            return new Promise<boolean>(function (resolve) {

                const cancel = () => {
                    close();
                    resolve(false);
                }

                const confirm = () => {
                    close();
                    resolve(true);
                }

                const close = () => {
                    ReactDOM.unmountComponentAtNode(el)
                    document.body.removeChild(el);
                }

                document.body.appendChild(el);

                ReactDOM.render(
                    <DialogConfirm
                        textConfirm={data?.textConfirm}
                        textCancel={data?.textCancel}
                        handleConfirm={confirm}
                        handleCancel={cancel}>
                        {data?.child}
                    </DialogConfirm>, el);
            });
        }
    }
}
