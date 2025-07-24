import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = (): void => {
    navigate('/auth');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <BarChartIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Data Visualization Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom align="center">
            Create, manage, and visualize your data with ease
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default LandingPage; 