import React, { useEffect, useState } from 'react';
import Footer from './stateless/Footer';
import Header from './stateless/Header';
import {
    Box,
    Stack,
    Button,
    Typography,
    Grid,
    Chip,
    Avatar,
} from '@mui/material';
import axios from 'axios';
import DishCard from './DishCard';
import { useSnackbar } from 'notistack';
import { RANKS } from '../utils/constants';
import { getDishesWithChangedRank } from '../utils/Utility';

const DishesPage = () => {
    const [dishes, setDishes] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const fetchDishes = async () => {
        try {
            const API_URL = `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`;
            const res = await axios.get(API_URL);
            const buildDishes = res.data.map((dish) => {
                return { ...dish, rankId: '' };
            });
            setDishes(buildDishes);
        } catch (err) {
            console.log('Dishes data not fetched');
            return [];
        }
    };

    useEffect(() => {
        fetchDishes();
    }, []);

    const handleRankDelete = (dishes, dish) => {
        setDishes(getDishesWithChangedRank(dishes, dish, 0));
        enqueueSnackbar(`${dish.dishName} is assigned no rank`, {
            variant: 'success',
        });
    };

    return (
        <Box>
            <Header />
            <Box className="section">
                <Box
                    sx={{
                        width: { xs: '98%', sm: '90%' },
                        margin: '2rem auto',
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={4}
                        sx={{
                            p: 2,
                            border: '2px solid black',
                            margin: '0 auto 2rem',
                            bgcolor: 'white',
                        }}
                    >
                        {dishes
                            .filter((item) => item.rankId > 0)
                            .sort((a, b) => a.rankId - b.rankId)
                            .map((item) => (
                                <Chip
                                    key={item.id}
                                    avatar={
                                        <Avatar
                                            sx={{
                                                bgcolor: RANKS.find(
                                                    (rank) =>
                                                        rank.id === item.rankId
                                                ).color,
                                            }}
                                        >
                                            {item.rankId}
                                        </Avatar>
                                    }
                                    label={item.dishName}
                                    onDelete={(e) => {
                                        handleRankDelete(dishes, item);
                                        e.stopPropagation();
                                    }}
                                />
                            ))}
                        {!!!dishes.filter((item) => item.rankId > 0).length && (
                            <Typography variant="h5" component="div">
                                No ranks assigned!
                            </Typography>
                        )}
                    </Stack>
                    <Grid
                        container
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        rowSpacing={{ xs: 1, sm: 5, md: 4 }}
                    >
                        {dishes.map((dish) => (
                            <Grid item xs={6} md={4} lg={3} key={dish.id}>
                                <DishCard
                                    dish={dish}
                                    dishes={dishes}
                                    setDishes={setDishes}
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
