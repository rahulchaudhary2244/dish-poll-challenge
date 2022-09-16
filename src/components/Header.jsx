import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SportsScoreRoundedIcon from '@mui/icons-material/SportsScoreRounded';

const Header = ({ showLeaderboard, showPrevious, showLogout }) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        localStorage.setItem('isLoggedIn', '');
        navigate('/login');
    };

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
                    padding: { xs: '0 0.3rem', md: '0 1rem' },
                    fontFamily: 'monospace',
                    fontWeight: { xs: 500, md: 700 },
                    letterSpacing: { md: '0.2rem' },
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Syook
            </Typography>

            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                sx={{ width: '80%' }}
            >
                {showLeaderboard && (
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<SportsScoreRoundedIcon />}
                        onClick={() => navigate('/dishes/leaderboard')}
                    >
                        <Typography
                            variant="button"
                            sx={{
                                margin: '0 1rem 0 0',
                                letterSpacing: '0.2rem',
                                fontWeight: 700,
                                // display: { xs: 'none', md: 'block' },
                            }}
                        >
                            Results
                        </Typography>
                    </Button>
                )}
                {showPrevious && (
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<WestIcon />}
                        onClick={() => navigate('/dishes')}
                    >
                        <Typography
                            variant="button"
                            sx={{
                                margin: '0 1rem 0 0',
                                letterSpacing: '0.2rem',
                                fontWeight: 700,
                                display: { xs: 'none', md: 'block' },
                            }}
                        >
                            Back
                        </Typography>
                    </Button>
                )}
                {showLogout && (
                    <Button
                        variant="outlined"
                        size="small"
                        endIcon={<LogoutIcon />}
                        onClick={handleLogout}
                    >
                        <Typography
                            variant="button"
                            sx={{
                                margin: '0 1rem 0 0',
                                letterSpacing: '0.2rem',
                                fontWeight: 700,
                                display: { xs: 'none', md: 'block' },
                            }}
                        >
                            Logout
                        </Typography>
                    </Button>
                )}
            </Stack>
        </Box>
    );
};

export default Header;
