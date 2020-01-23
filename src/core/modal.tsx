import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

// export const Modal: FunctionComponent<{ handleClose?: () => void }> = ({ handleClose, children }) => {

//     return (
//         <div className="modal is-active">
//             <div className="modal-background"></div>
//             <div className="modal-card">
//                 <header className="modal-card-head">
//                     <p className="modal-card-title">Modal title</p>
//                     <button className="delete" aria-label="close"></button>
//                 </header>
//                 <section className="modal-card-body">
//                     {children}
//                 </section>
//                 <footer className="modal-card-foot">
//                     <button className="modal-close is-large" aria-label="close"></button>
//                     <button className="button is-primary">Save changes</button>
//                     <button className="button">Cancel</button>
//                 </footer>
//             </div>
//         </div>
//     )
// };


export class Modal extends React.Component {

    el = document.createElement('div');

    componentDidMount() {
        //this.textInput.current.focus();
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    get modal() {
        return (
            <div className="modal is-active" >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {this.props.children}
                    </section>
                    <footer className="modal-card-foot">
                        <button className="modal-close is-large" aria-label="close"></button>
                        <button className="button is-primary">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }

    render() {
        return ReactDOM.createPortal(
            this.modal,
            this.el,
        );
    }
}
