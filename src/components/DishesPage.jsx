import React, { useEffect, useState } from 'react';
import Footer from './stateless/Footer';
import Header from './stateless/Header';
import {
    Box,
    Paper,
    styled,
    TextField,
    Stack,
    Button,
    Typography,
    Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import USER_DATA from '../data/USER_DATA';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DishCard from './DishCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DishesPage = () => {
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        try {
            const API_URL = `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`;
            const res = await axios.get(API_URL);
            setDishes(res.data);
        } catch (err) {
            console.log('Dishes data not fetched');
            return [];
        }
    };

    useEffect(() => {
        fetchDishes();
    }, []);

    return (
        <Box>
            <Header />
            <Box className="section">
                <Box sx={{ width: '90%', margin: '3rem auto' }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 4 }}
                        rowSpacing={{ xs: 5, md: 4 }}
                    >
                        {dishes.map(({ id, dishName, description, image }) => (
                            <Grid item xs={6} md={4} lg={3} key={id}>
                                <DishCard
                                    dishName={dishName}
                                    image={image}
                                    description={description}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default DishesPage;
