import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal-root') as Element;

export const Modal: FunctionComponent = ({ children }) => ReactDOM.createPortal(children, modalRoot);

