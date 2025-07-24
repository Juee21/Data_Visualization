import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar'; // Ensure Navbar is a default export
import Dashboard from './components/Dashboard'; // Ensure Dashboard is a default export
import DataManagement from './components/DataManagement'; // Ensure DataManagement is a default export
import Visualization from './components/Visualization'; // Ensure Visualization is a default export
import LandingPage from './components/LandingPage'; // Ensure LandingPage is a default export
import Auth from './components/Auth'; // Ensure Auth is a default export
import ProtectedRoute from './components/ProtectedRoute'; // Ensure ProtectedRoute is a default export
import { AuthProvider } from './context/AuthContext'; // Ensure AuthProvider is a named export

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <nav>
            <Link to="/visualization">Visualization</Link>
            {/* Add other navigation links here */}
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                      <Dashboard />
                    </Box>
                  </Box>
                </ProtectedRoute>
              }
            />
            <Route
              path="/data"
              element={
                <ProtectedRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                      <DataManagement />
                    </Box>
                  </Box>
                </ProtectedRoute>
              }
            />
            <Route
              path="/visualization"
              element={
                <ProtectedRoute>
                  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                      <Visualization />
                    </Box>
                  </Box>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;