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

const DishCard = ({ image, dishName, description }) => {
    const [isDescriptionDialogOpen, setIsDescriptionDialogOpen] =
        useState(false);

    const handleDescriptionDialogClickOpen = () => {
        setIsDescriptionDialogOpen(true);
    };

    const handleDescriptionDialogClickClose = () => {
        setIsDescriptionDialogOpen(false);
    };

    return (
        <>
            <Card>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
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
                            onClick={handleDescriptionDialogClickOpen}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <DescriptionDialog
                open={isDescriptionDialogOpen}
                handleClickClose={handleDescriptionDialogClickClose}
                dishName={dishName}
                description={description}
            />
        </>
    );
};

export default DishCard;
