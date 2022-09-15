import React, { useState } from 'react';
import {
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Card,
    CardHeader,
    IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionDialog from './DescriptionDialog';
import AssignRankDialog from './AssignRankDialog';
import { RANKS } from '../utils/constants';

const DishCard = ({ dish, dishes, setDishes }) => {
    const { image, dishName, description } = dish;
    const [isDescriptionDialogOpen, setIsDescriptionDialogOpen] =
        useState(false);
    const [isRankDialogOpen, setIsRankDialogOpen] = useState(false);

    const handleDescriptionClick = () => {
        setIsDescriptionDialogOpen(!isDescriptionDialogOpen);
    };

    const handleSettingsClick = () => {
        setIsRankDialogOpen(!isRankDialogOpen);
    };

    const getRankColor = () =>
        RANKS.find((rank) => rank.id === dish.rankId).color;

    return (
        <>
            <Card
                sx={{
                    bgcolor: getRankColor(),
                }}
            >
                <CardHeader
                    action={
                        <IconButton
                            aria-label="settings"
                            onClick={handleSettingsClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={dishName}
                />
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            className="clip-text-with-three-dots"
                            onClick={handleDescriptionClick}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <DescriptionDialog
                open={isDescriptionDialogOpen}
                handleClickClose={handleDescriptionClick}
                dishName={dishName}
                description={description}
            />
            <AssignRankDialog
                open={isRankDialogOpen}
                handleClose={handleSettingsClick}
                dish={dish}
                dishes={dishes}
                setDishes={setDishes}
            />
        </>
    );
};

export default DishCard;
