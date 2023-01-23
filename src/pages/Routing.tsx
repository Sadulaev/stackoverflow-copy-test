import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import QuestionsPage from './QuestionsPage';
import TagsPage from './TagsPage';


const Routing = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<QuestionsPage />} />
                <Route path='/tags' element={<TagsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;