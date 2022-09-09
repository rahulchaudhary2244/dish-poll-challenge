import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ showLogin }) => {
    return (
        <Box className="header" sx={{ flexDirection: 'row', width: '100%' }}>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="https://www.syook.com/"
                target="_blank"
                rel="noopener"
                sx={{
                    padding: '0 1rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '0.2rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Syook
            </Typography>
            {showLogin && (
                <Link to={{ pathname: '/login' }}>
                    <Button
                        variant="contained"
                        sx={{
                            margin: '0 1rem 0 0',
                            letterSpacing: '0.2rem',
                            fontWeight: 700,
                        }}
                    >
                        Login
                    </Button>{' '}
                </Link>
            )}
        </Box>
    );
};

export default Header;
