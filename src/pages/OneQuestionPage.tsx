import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Comment from '../components/CommentBlock';
import Tag from '../components/Tag';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCommentsByQuestion, fetchOneQuestion } from '../redux/features/queries';
import { Flex } from '../styles/components';
import { baseTheme } from '../styles/theme';

const OneQuestionPage = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const currentQuestion = useAppSelector(state => state.appData.currentQuestion)
    const comments = useAppSelector(state => state.appData.comments)

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchOneQuestion(id))
        if(currentQuestion) {
            dispatch(fetchCommentsByQuestion(id))
        }
    }, [currentQuestion?.question_id])

    return (
        <StyledQuestion>
            <p>Author: {currentQuestion?.owner.display_name}</p>
            <h3>{currentQuestion?.title}</h3>
            <Flex>
                <p>Tags:</p>
                {currentQuestion?.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </Flex>
            <StyledBody dangerouslySetInnerHTML={{__html: currentQuestion?.body || 'No Body'}}></StyledBody>
            <h3>Comments</h3>
            <Flex direction='column'>
                {comments.map(comment => <Comment {...comment} />)}
            </Flex>
        </StyledQuestion>
    );
};

const StyledQuestion = styled.div`
    padding: 10px 0 0 5px;
    h3 {
        margin: 0;
        font-size: 24px;
        border-bottom: 1px solid ${baseTheme.colors.border};
    }
    & > p {
        font-size: 22px;
        font-weight: 600;
    }
`

const StyledBody = styled.div`
    padding: 10px;
    background: hsl(0deg 0% 75% / 49%);
    font-size: 18px;
    border-radius: 5px;
`



export default OneQuestionPage;