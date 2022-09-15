import React, { useState } from 'react';
import Footer from './stateless/Footer';
import Header from './stateless/Header';
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
import USER_DATA from '../data/USER_DATA';
import { useNavigate } from 'react-router-dom';

const PaperItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f0f0d0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary, //#641db933
}));

const Login = () => {
    const [userLoginDetails, setUserLoginDetails] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserLoginDetails({
            ...userLoginDetails,
            [e.target.name]: e.target.value,
        });
        e.stopPropagation();
    };

    const handleUserLogin = (e) => {
        const user = USER_DATA.find(
            (user) =>
                user.username === userLoginDetails.username &&
                user.password === userLoginDetails.password
        );
        if (!!user) {
            navigate('/dishes', { state: { isAuthenticated: true, user } });
            return;
        }
        console.log('user not found');
        e.preventDefault();
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
                                    <Link to={{ pathname: '/register' }}>
                                        <Button variant="text">
                                            Register now
                                        </Button>
                                    </Link>
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
