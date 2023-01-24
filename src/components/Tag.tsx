import React from 'react';
import styled from 'styled-components';

type Props = {
    children: JSX.Element | string
}

const Tag = ({children}: Props): JSX.Element => {
    return (
        <StyledTag>
            {children}
        </StyledTag>
    );
};

const StyledTag = styled.div`
    margin: 5px;
    width: max-content;
    border-radius: 5px;
    padding: 3px;
    background: hsl(120,18%,70%);
    color: blue;
    display: flex;
    align-items: center;
    p{
        font-weight: 600;
        margin-right: 5px;
    }
    &:hover {
        background: hsl(120,18%,60%);
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
    }
`

export default Tag;