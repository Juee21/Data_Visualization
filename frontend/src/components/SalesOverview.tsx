import React from 'react';
import { Box, Typography, Paper, FormControl, Select, MenuItem } from '@mui/material';

const SalesOverview = () => {
  const percentage = 71;
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 2,
        bgcolor: 'white',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600 }}>
          Sales Overview
        </Typography>
        <FormControl size="small">
          <Select
            defaultValue="today"
            sx={{
              minWidth: 120,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e2e8f0',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#cbd5e1',
              },
            }}
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ position: 'relative' }}>
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="64"
              cy="64"
            />
            <circle
              className="text-secondary"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="64"
              cy="64"
            />
          </svg>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#1e293b',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {percentage}%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                mt: 0.5,
              }}
            >
              Target
            </Typography>
          </Box>
        </Box>

        <Box sx={{ ml: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#64748b',
                mb: 1,
              }}
            >
              System status
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#22c55e',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#22c55e',
                  fontWeight: 500,
                }}
              >
                OPTIMUM
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              maxWidth: 200,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default SalesOverview; 