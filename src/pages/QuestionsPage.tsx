import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import styled from 'styled-components';
import { fetchAllQuestions } from '../redux/features/queries';
import { Flex, Loader, PageTitle, Title1 } from '../styles/components';
import QuestionCard from '../components/QuestionCard';
import { baseTheme } from '../styles/theme';

const QuestionsPage = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const questions = useAppSelector(state => state.appData.questions)
    const status = useAppSelector(state => state.appData.status)

    useEffect(() => {
        dispatch(fetchAllQuestions())
    }, [dispatch])

    return (
        <StyledQuestionsPage>
            <TitleBlock>
                <PageTitle>All Questions</PageTitle>
            </TitleBlock>
            {status === 'pending' ?
                <Flex justifyContent='center' alignItems='center'>
                    <Loader />
                </Flex>
                :
                ''
            }
            {status === 'fulfilled' ?
                <Flex direction='column'>
                    {questions?.map(question => {
                        return (
                            <QuestionCard {...question} key={question.question_id} />
                        )
                    })}
                </Flex>
                :
                ''
            }

        </StyledQuestionsPage>

    );
};

const StyledQuestionsPage = styled.div`
    padding: 24px 16px;
    width: 100%;
    height: 100vh;
`

const TitleBlock = styled.div`
    border-bottom: 1px solid ${baseTheme.colors.border}
`

export default QuestionsPage;