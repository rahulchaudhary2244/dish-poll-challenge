import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {
    Box,
    Paper,
    styled,
    TextField,
    Stack,
    Button,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { registerUser } from '../utils/Utility';

const PaperItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f0f0d0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary, //#641db933
}));

const RegisterUserPage = () => {
    const [userRegisterDetails, setUserRegisterDetails] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    /**
     *
     * @param {Object} e - accepts onChange event on text field
     */
    const handleInputChange = (e) => {
        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value.trim(),
        });
        e.stopPropagation();
    };

    /**
     *
     * @param {Object} e - accepts onClick event on button
     */
    const handleRegisterUser = (e) => {
        const { message, variant } = registerUser(userRegisterDetails);
        enqueueSnackbar(message, {
            variant: variant,
        });
        if (variant === 'success') navigate('/login');
        e.stopPropagation();
    };

    return (
        <Box>
            <Header />
            <Box className="section">
                <Box sx={{ width: '90%', margin: '0 auto 0' }}>
                    <Box
                        sx={{
                            width: '100%',
                            marginTop: '4rem',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignContent: 'center',
                        }}
                    >
                        <PaperItem elevation={12}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                            >
                                <Typography variant="h5" component="div">
                                    Register
                                </Typography>
                                <TextField
                                    id="username-input"
                                    label="Username"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={userRegisterDetails.username}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    placeholder="Enter your password"
                                    name="password"
                                    type="password"
                                    value={userRegisterDetails.password}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={handleRegisterUser}
                                >
                                    Resgister Now
                                </Button>
                                <Typography variant="subtitle1" component="div">
                                    Already have an account ?{' '}
                                    <Button
                                        variant="text"
                                        onClick={() => navigate('/login')}
                                    >
                                        Login now
                                    </Button>
                                </Typography>
                            </Stack>
                        </PaperItem>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default RegisterUserPage;
