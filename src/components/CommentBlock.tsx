import React from 'react';
import styled from 'styled-components';
import { Comment } from '../redux/features/types';
import { baseTheme } from '../styles/theme';

const CommentBlock = (comment: Comment): JSX.Element => {
    return (
        <StyledComment>
            <h4>{comment.owner.display_name}</h4>
            <div dangerouslySetInnerHTML={{ __html: comment.body } || 'No Body'}></div>
        </StyledComment>
    );
};

const StyledComment = styled.div`
    padding: 5px 0;
    width: 100%;
    border-bottom: 1px solid ${baseTheme.colors.border};
    h4 {
        color: blue;
        margin: 5px 0;
        font-size: 20px;
    }
    div {
        padding: 3px;
        background: hsl(0deg 0% 75% / 49%);
        font-size: 18px;
        border-radius: 5px;
    }
`

export default CommentBlock;