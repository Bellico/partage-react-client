import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const IAction = styled.i<{ isAction?: boolean }>`
cursor: ${props => props.isAction ? 'pointer' : 'default'}
`;

type IconProps = {
    className?: string,
    isAction?: boolean,
    onClick?: () => void
}

export const Icon: FunctionComponent<IconProps> = ({ className, isAction, children, onClick }) => (
    <span
        className={`icon ${className}`}
        onClick={() => isAction && onClick ? onClick() : null}>
        <IAction isAction={isAction} className={`fas fa-${children}`}></IAction>
    </span>
);
