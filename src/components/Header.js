import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box
            className="header"
            sx={{ flexDirection: { xs: 'row-reverse', sm: 'row' } }}
        >
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
                    color: { xs: '#8b0d9a', sm: 'white' },
                    textDecoration: 'none',
                }}
            >
                Syook
            </Typography>
        </Box>
    );
};

export default Header;
