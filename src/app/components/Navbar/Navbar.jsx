import React, { useState, useEffect } from 'react';
import LogoLight from '../../../assets/NavbarLogo/trace.svg';
import LogoDark from '../../../assets/NavbarLogo/trace(4).svg';

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
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} // Transparent background
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Left Side: Image Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={mode === 'light' ? LogoLight : LogoDark}    
                alt="Logo"
                style={{ height: '100px', cursor: 'pointer' }} 
              />
            </Box>

            {/* Right Side: Dark Mode Toggle & Book a Free Demo Button */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" color="secondary">
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