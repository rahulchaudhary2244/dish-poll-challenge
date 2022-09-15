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

const PaperItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f0f0d0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary, //#641db933
}));

const Register = () => {
    const [userRegisterDetails, setUserRegisterDetails] = useState({
        username: '',
        password: '',
    });

    /**
     *
     * @param {Object} e - accepts onChange event on text field
     */
    const handleInputChange = (e) => {
        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value,
        });
        e.stopPropagation();
    };

    /**
     *
     * @param {Object} e - accepts onClick event on button
     */
    const handleRegisterUser = (e) => {
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
                                    id="outlined-textarea"
                                    label="Username"
                                    placeholder="Enter your username"
                                    name="username"
                                    value={userRegisterDetails.username}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Password"
                                    placeholder="Enter your password"
                                    name="password"
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
                                    <Link to={{ pathname: '/login' }}>
                                        <Button variant="text">
                                            Login now
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

export default Register;
