import React, { useState, useEffect } from 'react';
import LogoLight from '../../../assets/NavbarLogo/trace.png';
import LogoDark from '../../../assets/NavbarLogo/trace(4).png';

import {
    AppBar,
    Toolbar,
    IconButton,
    Container,
    Button,
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar() {
    // Get stored theme mode or default to 'light'
    const getStoredTheme = () => localStorage.getItem('themeMode') || 'light';
    const [mode, setMode] = useState(getStoredTheme);

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const theme = createTheme({
        palette: { mode: mode },
    });

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="static"
                sx={{ backgroundColor: 'transparent', py:"5px" }} // Transparent background
            >
                <Container>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Left Side: Image Logo */}
                        <img
                            src={mode === 'light' ? LogoLight : LogoDark}
                            alt="Logo"
                            style={{ height: '50px', width: 'auto', cursor: 'pointer' }}
                        />


                        {/* Right Side: Dark Mode Toggle & Book a Free Demo Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" sx={{ backgroundColor: "#FCC41B", display: { xs: 'none', sm: 'block' } }}>
                                Book a Free Demo
                            </Button>
                            <IconButton
                                onClick={toggleTheme}
                                color={mode === 'light' ? 'black' : 'inherit'} // Black icon in light mode
                                sx={{ mx: 1 }}
                            >
                                {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
       



        </ThemeProvider>
    );
}