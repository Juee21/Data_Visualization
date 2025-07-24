import React from 'react';
import {
  HomeIcon,
  CalendarIcon,
  ChartBarIcon,
  ViewColumnsIcon,
  UserGroupIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Box, Typography, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';

const menuItems = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Calendar', icon: CalendarIcon },
  { name: 'Reports', icon: ChartBarIcon },
  { name: 'Dashboard', icon: ViewColumnsIcon, active: true },
  { name: 'Contacts', icon: UserGroupIcon },
];

const Sidebar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 280,
        height: '100vh',
        bgcolor: 'primary.main',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <ViewColumnsIcon className="h-8 w-8 text-secondary.main" />
        <Typography
          variant="h5"
          sx={{
            color: 'secondary.main',
            fontWeight: 700,
          }}
        >
          Acme
        </Typography>
      </Box>

      <Box sx={{ flex: 1, px: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.light',
                    '&:hover': {
                      bgcolor: 'primary.light',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'secondary.main',
                    },
                    '& .MuiListItemText-primary': {
                      color: 'secondary.main',
                    },
                  },
                }}
                selected={item.active}
              >
                <ListItemIcon sx={{ color: 'text.secondary' }}>
                  <item.icon className="h-5 w-5" />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: 'text.secondary',
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<PlusIcon className="h-5 w-5" />}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            py: 1.5,
          }}
        >
          Add new entry
        </Button>
      </Box>
    </Paper>
  );
};

export default Sidebar; 