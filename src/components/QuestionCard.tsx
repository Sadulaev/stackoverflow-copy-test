import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to={`/question/${question.question_id}`}><StyledQuestionTitle>{question.title}</StyledQuestionTitle></NavLink>
                <Flex>
                    {question.tags.map(tag => {
                        return <StyledTags key={tag}>{tag}</StyledTags>
                    })}
                </Flex>
                <Flex>
                    <Flex>
                    <NavLink to={`/users/${question.question_id}/tops`}><h4>{question.owner.display_name}</h4></NavLink>
                    </Flex>

                </Flex>
            </Flex>
        </StyledQuestion>
    );
};

const StyledQuestion = styled.div`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${baseTheme.colors.border};
    a {
        text-decoration: none;
    }
    p {
        margin-right: 10px;
    }
    h4 {
        margin: 10px;
        color: blue;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
    }
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