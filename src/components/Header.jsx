import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

const Header = ({ showLogin, showLeaderboard, showPrevious }) => {
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
                            endIcon={<EastIcon />}
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
                    <Link to={{ pathname: '/dishes' }}>
                        <Button
                            variant="contained"
                            startIcon={<WestIcon />}
                            sx={{
                                margin: '0 1rem 0 0',
                                letterSpacing: '0.2rem',
                                fontWeight: 700,
                            }}
                        >
                            Back
                        </Button>
                    </Link>
                )}
            </Box>
        </Box>
    );
};

export default Header;
