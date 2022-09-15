import React, { useContext } from 'react';
import { Stack, Chip, Avatar, Typography } from '@mui/material';
import { RANKS } from '../utils/constants';
import { useSnackbar } from 'notistack';
import dishContext from '../context/DishContext';
import { getDishesWithChangedRank } from '../utils/Utility';

const SelectedDishes = () => {
    const [dishes, setDishes] = useContext(dishContext);

    const { enqueueSnackbar } = useSnackbar();
    const handleRankDelete = (dishes, dish) => {
        setDishes(getDishesWithChangedRank(dishes, dish, 0));
        enqueueSnackbar(`${dish.dishName} is assigned no rank`, {
            variant: 'success',
        });
    };

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            className="hide-scrollbar"
            sx={{
                margin: '0 auto 2rem',
                overflowX: 'scroll',
            }}
        >
            {dishes
                .filter((item) => item.rankId > 0)
                .sort((a, b) => a.rankId - b.rankId)
                .map((item) => (
                    <Chip
                        sx={{ backgroundColor: 'white' }}
                        key={item.id}
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: RANKS.find(
                                        (rank) => rank.id === item.rankId
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
    );
};

export default SelectedDishes;
