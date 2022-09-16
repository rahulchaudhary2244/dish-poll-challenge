import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
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
                {showLeaderboard && (
                    <Button
                        variant="contained"
                        endIcon={<SportsScoreRoundedIcon />}
                        sx={{
                            margin: '0 1rem 0 0',
                            letterSpacing: '0.2rem',
                            fontWeight: 700,
                        }}
                        onClick={() => navigate('/dishes/leaderboard')}
                    >
                        View Score
                    </Button>
                )}
                {showPrevious && (
                    <Button
                        variant="contained"
                        startIcon={<WestIcon />}
                        sx={{
                            margin: '0 1rem 0 0',
                            letterSpacing: '0.2rem',
                            fontWeight: 700,
                        }}
                        onClick={() => navigate('/dishes')}
                    >
                        Back
                    </Button>
                )}
                {showLogout && (
                    <Button
                        variant="outlined"
                        endIcon={<LogoutIcon />}
                        sx={{
                            margin: '0 1rem 0 0',
                            letterSpacing: '0.2rem',
                            fontWeight: 700,
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Header;
