import React, { ReactNode } from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon: ReactNode;
}

const StatsCard = ({ title, value, change, icon }: StatsCardProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 2,
        bgcolor: 'white',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              mb: 1,
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#1e293b',
              fontWeight: 600,
              mb: change ? 1 : 0,
            }}
          >
            {value}
          </Typography>
          {change && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: change.type === 'increase' ? '#16a34a' : '#dc2626',
                  fontWeight: 500,
                }}
              >
                {change.type === 'increase' ? '↑' : '↓'} {Math.abs(change.value)}%
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                }}
              >
                vs last month
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 1,
            bgcolor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Box>
    </Paper>
  );
};

export default StatsCard; 