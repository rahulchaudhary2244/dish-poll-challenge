import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DishState from '../context/DishState';

const Protected = ({ Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedId = localStorage.getItem('isLoggedIn');
        if (!!!isLoggedId) {
            navigate('/login');
        }
    });

    return (
        <DishState>
            <Component />
        </DishState>
    );
};

export default Protected;
