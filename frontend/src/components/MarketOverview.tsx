import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Box, Typography, Paper, FormControl, Select, MenuItem } from '@mui/material';

const data = [
  { month: 'Jan', activity: 30, goal: 45 },
  { month: 'Feb', activity: 40, goal: 60 },
  { month: 'Mar', activity: 45, goal: 50 },
  { month: 'Apr', activity: 35, goal: 45 },
  { month: 'May', activity: 30, goal: 40 },
  { month: 'Jun', activity: 25, goal: 35 },
  { month: 'Jul', activity: 40, goal: 50 },
  { month: 'Aug', activity: 35, goal: 45 },
  { month: 'Sep', activity: 30, goal: 40 },
  { month: 'Oct', activity: 35, goal: 45 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: 'white',
          p: 2,
          borderRadius: 1,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        }}
      >
        <Typography variant="body2" sx={{ color: '#64748b', mb: 1 }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: '#0EA5E9' }}>
          Activity: {payload[0].value}
        </Typography>
        <Typography variant="body2" sx={{ color: '#1E1B4B' }}>
          Goal: {payload[1].value}
        </Typography>
      </Box>
    );
  }
  return null;
};

const MarketOverview = () => {
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
          Market Overview
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

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: 1,
              bgcolor: '#0EA5E9',
            }}
          />
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Activity
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: 1,
              bgcolor: '#1E1B4B',
            }}
          />
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Goal
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="activity"
              fill="#0EA5E9"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar
              dataKey="goal"
              fill="#1E1B4B"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default MarketOverview; 