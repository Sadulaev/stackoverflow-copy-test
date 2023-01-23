import React from 'react';
import { useParams } from 'react-router-dom';

const OneQuestionPage = (): JSX.Element => {
    const { id } = useParams()
    return (
        <>
            <h1>{id}</h1>
        </>
    );
};

export default OneQuestionPage;