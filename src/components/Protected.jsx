import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedId = localStorage.getItem('isLoggedIn');
        if (!!!isLoggedId) {
            navigate('/login');
        }
    });

    return (
        <>
            <Component />
        </>
    );
};

export default Protected;
