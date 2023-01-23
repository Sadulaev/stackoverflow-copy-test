import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import styled from 'styled-components';
import { fetchAllQuestions } from '../redux/features/queries';
import { Flex, PageTitle, Title1 } from '../styles/components';
import QuestionCard from '../components/Question';
import { baseTheme } from '../styles/theme';

const QuestionsPage = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const questions = useAppSelector(state => state.appData.questions)
    const status = useAppSelector(state => state.appData.status)

    useEffect(() => {
        dispatch(fetchAllQuestions())
    }, [])

    return (
        <StyledQuestionsPage>
            <TitleBlock>
                <PageTitle>All Questions</PageTitle>
            </TitleBlock>
            <Flex direction='column'>
                {questions?.map(question => {
                    return (
                        <QuestionCard {...question} />
                    )
                })}
            </Flex>
        </StyledQuestionsPage>

    );
};

const StyledQuestionsPage = styled.div`
    padding: 24px 16px; 
`

const TitleBlock = styled.div`
    border-bottom: 1px solid ${baseTheme.colors.border}
`

export default QuestionsPage;