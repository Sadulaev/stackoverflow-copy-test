import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import { Flex } from '../styles/components';
import { baseTheme } from '../styles/theme';
import OneQuestionPage from './OneQuestionPage';
import QuestionsPage from './QuestionsPage';
import SearchPage from './SearchPage';
import TagsPage from './TagsPage';
import UserTops from './UserTops';

const MainPage = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Flex alignItems='flex-start'>
                        <LeftNav />
                        <Content>
                            <Routes>
                                <Route path='/' index element={<QuestionsPage />} />
                                <Route path='/tags' element={<TagsPage />} />
                                <Route path='/questions/search' element={<SearchPage />} />
                                <Route path='/question/:id' element={<OneQuestionPage />} />
                                <Route path='/users/:id/tops' element={<UserTops />} />
                            </Routes>
                        </Content>
                    </Flex>
                </Container>
            </BrowserRouter>
        </>
    );
};

const Container = styled.div`
    max-width: ${baseTheme.media.max};
    margin: 0 auto;
`
const Content = styled.div`
    width: 100%;
`

export default MainPage;