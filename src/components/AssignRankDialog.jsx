import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSnackbar } from 'notistack';
import { RANKS } from '../utils/constants';
import { getDishesWithChangedRank } from '../utils/Utility';

const AssignRankDialog = ({ open, dish, dishes, setDishes, handleClose }) => {
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
