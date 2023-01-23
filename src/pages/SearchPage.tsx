import React, { useEffect } from 'react';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchQuestionsByParams } from '../redux/features/queries';
import { Flex, Loader, PageTitle } from '../styles/components';
import { baseTheme } from '../styles/theme';

const SearchPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const search = useAppSelector(state => state.application.search)
    const questions = useAppSelector(state => state.appData.questions)
    const status = useAppSelector(state => state.appData.status)

    useEffect(() => {
        dispatch(fetchQuestionsByParams(search))
    }, [search])

    return (
        <StyledQuestionsPage>
            <TitleBlock>
                <PageTitle>'{search}' search result</PageTitle>
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
    min-width: 100%
`

const TitleBlock = styled.div`
    border-bottom: 1px solid ${baseTheme.colors.border};
    width: 100%;
`

export default SearchPage;