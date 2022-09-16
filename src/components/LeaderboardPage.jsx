import React, { useContext } from 'react';
import Header from './Header';
import dishContext from '../context/DishContext';
import { Box, Paper, Typography, Avatar, Stack } from '@mui/material';
import Footer from './stateless/Footer';
import { getRankColorForDish, getScoreByRankForDish } from '../utils/Utility';

const customStyles = {
    leaderboardHeadingBg: {
        textAlign: 'center',
        padding: {
            xs: '0.6rem',
            lg: '0.8rem',
            xl: '1rem',
        },
        width: '90%',
        lineHeight: '60px',
        backgroundColor: 'black',
        color: 'white',
        textTransform: 'uppercase',
    },
    leaderboardHeadingFont: {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '0.2rem',
    },
};

const getRankedDish = (dish) => (
    <Paper key={dish.id} elevation={12} sx={{ width: '100%' }}>
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{
                padding: '0.5rem',
                margin: '0 auto 0',
            }}
        >
            <Avatar
                sx={{
                    bgcolor: getRankColorForDish(dish),
                }}
            >
                {getScoreByRankForDish(dish)}
            </Avatar>
            <Typography variant="h6" component="div">
                {dish.dishName}
            </Typography>
            <Avatar
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'block',
                    },
                }}
                alt={dish.dishName}
                src={dish.image}
            />
        </Stack>
    </Paper>
);

const LeaderboardPage = () => {
    const [dishes] = useContext(dishContext);
    console.log(dishes.filter((dish) => dish.rankId > 0));
    return (
        <>
            <Box>
                <Header showPrevious showLogout />
                <Box className="section">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            padding: '4rem 0',
                            width: '80%',
                            margin: '0 auto',
                        }}
                    >
                        <Paper
                            elevation={12}
                            sx={customStyles.leaderboardHeadingBg}
                        >
                            <Typography
                                variant="h5"
                                component="div"
                                sx={customStyles.leaderboardHeadingFont}
                            >
                                {!!dishes.filter((dish) => dish.rankId > 0)
                                    .length
                                    ? '🎉  Result  🎉'
                                    : '🍜 No Dish Selected! 🍜'}
                            </Typography>
                        </Paper>

                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{ width: '90%' }}
                        >
                            {dishes
                                .filter((dish) => dish.rankId > 0)
                                .sort((a, b) => a.rankId - b.rankId)
                                .map((dish) => getRankedDish(dish))}
                        </Stack>
                    </Stack>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default LeaderboardPage;
