import React, { useContext } from 'react';
import {
    DialogActions,
    DialogContent,
    Dialog,
    Button,
    DialogTitle,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@mui/material';

import { useSnackbar } from 'notistack';
import { RANKS } from '../utils/constants';
import { getDishesWithChangedRank } from '../utils/Utility';
import dishContext from '../context/DishContext';

const AssignRankDialog = ({ open, dish, handleClose }) => {
    const [dishes, setDishes] = useContext(dishContext);
    const { enqueueSnackbar } = useSnackbar();

    const handleRankChange = (e) => {
        const selectedRankId = e.target.value;
        setDishes(getDishesWithChangedRank(dishes, dish, selectedRankId));
        const message =
            selectedRankId === 0
                ? `${dish.dishName} is assigned no rank`
                : `${dish.dishName} is set to ${
                      RANKS.find((item) => item.id === selectedRankId).label
                  }`;
        enqueueSnackbar(message, {
            variant: 'success',
        });
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Assign Rank to <strong>{dish.dishName}</strong>
            </DialogTitle>
            <DialogContent>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                        Rank
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={dish.rankId}
                        label="Rank"
                        onChange={handleRankChange}
                    >
                        {RANKS.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.id === 0 ? (
                                    <em>{item.label}</em>
                                ) : (
                                    item.label
                                )}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AssignRankDialog;
