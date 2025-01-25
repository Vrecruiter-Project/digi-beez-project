import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/mulish';

// Create a custom MUI theme
const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif', // Set Mulish as the primary font
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);