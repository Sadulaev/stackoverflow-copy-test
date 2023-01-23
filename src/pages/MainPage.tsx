import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import { Flex } from '../styles/components';
import { baseTheme } from '../styles/theme';
import QuestionsPage from './QuestionsPage';
import Routing from './Routing';
import SearchPage from './SearchPage';
import TagsPage from './TagsPage';

const MainPage = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Flex alignItems='flex-start'>
                        <LeftNav />
                        <Routes>
                            <Route path='/' index element={<QuestionsPage />} />
                            <Route path='/tags' element={<TagsPage />} />
                            <Route path='/questions/search' element={<SearchPage />} />
                        </Routes>
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

export default MainPage;