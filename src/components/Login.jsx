import React, { useState } from 'react';
import Footer from './stateless/Footer';
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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { authenticateUser } from '../utils/Utility';

const PaperItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f0f0d0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary, //#641db933
}));

const Login = () => {
    const [userLoginDetails, setUserLoginDetails] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleInputChange = (e) => {
        setUserLoginDetails({
            ...userLoginDetails,
            [e.target.name]: e.target.value.trim(),
        });
        e.stopPropagation();
    };

    const handleUserLogin = (e) => {
        e.preventDefault();

        if (authenticateUser(userLoginDetails)) {
            localStorage.setItem('isLoggedIn', 'someToken');
            enqueueSnackbar(`Welcome ${userLoginDetails.username}`, {
                variant: 'success',
            });
            navigate('/dishes');
        } else {
            enqueueSnackbar(`No user found, Register to Login`, {
                variant: 'warning',
            });
        }
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
                                component="form"
                                onSubmit={handleUserLogin}
                            >
                                <Typography variant="h5" component="div">
                                    Login
                                </Typography>
                                <TextField
                                    id="outlined-textarea"
                                    label="Username"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={userLoginDetails.username}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={userLoginDetails.password}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <Typography variant="subtitle1" component="div">
                                    Don't have account ?{' '}
                                    <Button
                                        variant="text"
                                        onClick={() => navigate('/register')}
                                    >
                                        Register now
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

export default Login;
