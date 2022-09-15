import React from 'react';
import {
    DialogTitle,
    Dialog,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions,
} from '@mui/material';

const DishDescriptionDialog = ({
    open,
    handleClickClose,
    description,
    dishName,
}) => {
    return (
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>{dishName}</DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClickClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DishDescriptionDialog;
