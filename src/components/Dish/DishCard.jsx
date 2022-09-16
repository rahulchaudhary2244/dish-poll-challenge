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
import DishDescriptionDialog from './DishDescriptionDialog';
import DishAssignRankDialog from './DishAssignRankDialog';
import { getRankColorForDish } from '../../utils/Utility';

const DishCard = ({ dish }) => {
    const { image, dishName, description } = dish;

    const [isDishDescriptionDialogOpen, setIsDishDescriptionDialogOpen] =
        useState(false);

    const [isRankDialogOpen, setIsRankDialogOpen] = useState(false);

    /**
     *
     * @param {Object} e - accepts onClick event object
     */
    const handleDescriptionClick = () => {
        setIsDishDescriptionDialogOpen(!isDishDescriptionDialogOpen);
    };

    /**
     *
     * @param {Object} e - accepts onClick event object
     */
    const handleSettingsClick = () => {
        setIsRankDialogOpen(!isRankDialogOpen);
    };

    return (
        <>
            <Card
                sx={{
                    bgcolor: getRankColorForDish(dish),
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
            <DishDescriptionDialog
                open={isDishDescriptionDialogOpen}
                handleClickClose={handleDescriptionClick}
                dishName={dishName}
                description={description}
            />
            <DishAssignRankDialog
                open={isRankDialogOpen}
                handleClose={handleSettingsClick}
                dish={dish}
            />
        </>
    );
};

export default DishCard;
