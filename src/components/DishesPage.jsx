import React, { useContext } from 'react';
import Footer from './stateless/Footer';
import Header from './Header';
import { Box, Grid } from '@mui/material';
import DishCard from './DishCard';
import dishContext from '../context/DishContext';
import SelectedDishes from './SelectedDishes';

const DishesPage = () => {
    const [dishes] = useContext(dishContext);

    return (
        <Box>
            <Header showLeaderboard={true} />
            <Box className="section">
                <Box
                    sx={{
                        width: { xs: '98%', sm: '90%' },
                        margin: '2rem auto',
                    }}
                >
                    <SelectedDishes />
                    <Grid
                        container
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        rowSpacing={{ xs: 1, sm: 5, md: 4 }}
                    >
                        {dishes.map((dish) => (
                            <Grid item xs={6} md={4} lg={3} key={dish.id}>
                                <DishCard dish={dish} />
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
