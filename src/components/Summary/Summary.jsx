import * as React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

export default function Summary({name,value}) {
  return (
    <Paper>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 1,
        minWidth: 300,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>{name}</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        {value}
      </Box>
      <TrendingUpIcon
        sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
      />
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
        18.77%
      </Box>
      <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
        vs. last week
      </Box>
    </Box>
    </Paper>
  );
}
