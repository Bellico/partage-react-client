import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const NewPictureBlock = styled.figure`
    cursor: pointer;
    height: 50em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px dashed #8f8f8f;
`;

export const NewPicture: FunctionComponent = () => (
    <NewPictureBlock className="image picture">
        <span className="icon action is-large">
            <i className="fas fa-images fa-3x"></i>
        </span>
    </NewPictureBlock>
);
