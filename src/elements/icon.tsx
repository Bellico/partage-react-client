import React, { FunctionComponent } from 'react';

export const Icon: FunctionComponent<{ className?: string, isAction?: boolean, onClick?: () => void }> = ({ className, isAction, children, onClick }) => (
    <span
        className={`icon ${isAction ? 'action ' : ''}${className}`}
        onClick={() => isAction && onClick ? onClick() : null}>
        <i className={`fas fa-${children}`}></i>
    </span>
);
