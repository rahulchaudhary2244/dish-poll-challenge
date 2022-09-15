import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ showLogin, showLeaderboard, showPrevious }) => {
    const navigate = useNavigate();

    return (
        <Box className="header">
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '50%',
                    justifyContent: 'flex-end',
                }}
            >
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
                        </Button>
                    </Link>
                )}
                {showLeaderboard && (
                    <Link to={{ pathname: '/dishes/leaderboard' }}>
                        <Button
                            variant="contained"
                            sx={{
                                margin: '0 1rem 0 0',
                                letterSpacing: '0.2rem',
                                fontWeight: 700,
                            }}
                        >
                            Leaderboard
                        </Button>
                    </Link>
                )}
                {showPrevious && (
                    // <Link to={{ pathname: '/dishes' }}>
                    <Button
                        variant="contained"
                        sx={{
                            margin: '0 1rem 0 0',
                            letterSpacing: '0.2rem',
                            fontWeight: 700,
                        }}
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                    // </Link>
                )}
            </Box>
        </Box>
    );
};

export default Header;
