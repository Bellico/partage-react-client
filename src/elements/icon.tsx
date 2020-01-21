import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Icon: FunctionComponent<{ className?: string, isAction?: boolean, onClick?: () => void }> = ({ className, isAction, children, onClick }) => {

    const IStyled = styled.i`
    cursor: ${isAction ? 'pointer' : 'default'}
    `;

    return (<span
        className={`icon ${isAction ? 'action ' : ''}${className}`}
        onClick={() => isAction && onClick ? onClick() : null}>
        <IStyled className={`fas fa-${children}`}></IStyled>
    </span>
    );
}