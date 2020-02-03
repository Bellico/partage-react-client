import React, { FunctionComponent } from 'react';
import styled from 'styled-components';


const IAction = styled.span<{ isAction?: boolean }>`
    cursor: ${props => props.isAction ? 'pointer' : 'default'};

    &:hover{
        background: rgb(229, 229, 229);
        border-radius: 50%;
        color: #363636;
    }

    & > i {
        cursor: ${props => props.isAction ? 'pointer' : 'default'};
    }
`;

type IconProps = {
    className?: string,
    isAction?: boolean,
    onClick?: () => void
}

export const Icon: FunctionComponent<IconProps> = ({ className, isAction, children, onClick }) => (
    <IAction
        isAction
        className={`icon ${className}`}
        onClick={() => isAction && onClick ? onClick() : null}>
        <i className={`fas fa-${children}`}></i>
    </IAction>
);


const IButton = styled.button`
    background: none;
    border-color: transparent;
    color: inherit;
    border: none;
    padding: 0em 1.3em;

    &:hover {
       background: rgb(229, 229, 229);
    }
`;

export const IconButton: FunctionComponent<IconProps> = ({ className, children, onClick }) => (
    <IButton className={`button ${className}`} onClick={() => onClick ? onClick() : null}>
        <span
            className={`icon`}>
            <i style={{ cursor: 'pointer' }} className={`fas fa-${children}`}></i>
        </span>
    </IButton >
);
