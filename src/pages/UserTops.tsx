import React from 'react';
import { useParams } from 'react-router-dom';

const UserTops = ():JSX.Element => {
    const {id} = useParams()
    return (
        <>{id}</>
    );
};

export default UserTops;