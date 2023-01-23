import React from 'react';
import styled from 'styled-components';
import { Question } from '../redux/features/types';
import { Flex } from '../styles/components';
import { baseTheme } from '../styles/theme';

const QuestionCard = (question: Question): JSX.Element => {
    return (
        <StyledQuestion>
            <Flex direction='column' alignItems='flex-start'>
                <Flex>
                    <p>{question.score} votes</p>
                    <p>{question.answer_count} answers</p>
                    <p>{question.view_count} views</p>
                </Flex>
                <StyledQuestionTitle>{question.title}</StyledQuestionTitle>
                <Flex>
                    {question.tags.map(tag => {
                        return <StyledTags>{tag}</StyledTags>
                    })}
                </Flex>
            </Flex>
        </StyledQuestion>
    );
};

const StyledQuestion = styled.div`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${baseTheme.colors.border};
    p {
        margin-right: 10px;
    }
`
const StyledQuestionTitle = styled.h3`
    margin: 8px 0;
    font-size: 18px;
    color: blue;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const StyledTags = styled.div`
    margin-right: 5px;
    padding: 5px;
    background: hsl(210,8%,90%);
    color: blue;
`
export default QuestionCard;