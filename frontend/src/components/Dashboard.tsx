import React from 'react';
import StatsCard from './StatsCard';
import MarketOverview from './MarketOverview';
import SalesOverview from './SalesOverview';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';
import { Box, Container, Grid, Typography } from '@mui/material';

type ChangeType = 'increase' | 'decrease';

interface Stat {
  title: string;
  value: string;
  change?: {
    value: number;
    type: ChangeType;
  };
  icon: React.ReactNode;
}

const Dashboard = () => {
  const stats: Stat[] = [
    {
      title: 'Number of Sales',
      value: '3450',
      change: { value: 25, type: 'increase' },
      icon: <ChartBarIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Sales Revenue',
      value: '$35.256',
      change: { value: 15, type: 'increase' },
      icon: <CurrencyDollarIcon className="h-6 w-6 text-cyan-500" />,
    },
    {
      title: 'Average Price',
      value: '$35.256',
      change: { value: 15, type: 'decrease' },
      icon: <ChartPieIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Operations',
      value: '15.893',
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-purple-500" />,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <Box component="main" sx={{ p: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 4,
            bgcolor: 'white',
            p: 3,
            borderRadius: 2,
            boxShadow: 1
          }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#1e293b' }}>
              Dashboard Overview
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                Marcus White
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1" sx={{ color: '#64748b' }}>
                  MW
                </Typography>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatsCard {...stat} />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} lg={8}>
              <MarketOverview />
            </Grid>
            <Grid item xs={12} lg={4}>
              <SalesOverview />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ 
              bgcolor: 'white', 
              p: 3, 
              borderRadius: 2, 
              boxShadow: 1 
            }}>
              <Typography variant="h6" sx={{ mb: 3, color: '#1e293b' }}>
                Recent Activity
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { type: 'Incoming Transfer', asset: 'Bitcoin', isPositive: true },
                  { type: 'Sales Report', asset: 'Ethereum', isPositive: false },
                  { type: 'Incoming Transfer', asset: 'Binance', isPositive: true },
                ].map((activity, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      borderRadius: 1,
                      bgcolor: '#f8fafc',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: activity.isPositive ? '#dcfce7' : '#fee2e2',
                        }}
                      >
                        <Typography
                          sx={{
                            color: activity.isPositive ? '#16a34a' : '#dc2626',
                            fontSize: '1.25rem',
                          }}
                        >
                          {activity.isPositive ? '↑' : '↓'}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#1e293b' }}>
                          {activity.type}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b' }}>
                          {activity.asset}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;