import * as React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function Greetings({message,userName}) {
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
      <Box sx={{ color: 'text.secondary' }}>{message}</Box>

      <Box sx={{ color: 'text.primary', fontSize: 28, fontWeight: 'medium' }}>
        {userName}
      </Box>
      
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
        <EmojiPeopleIcon color='primary'/>
      
      </Box>
     
    </Box>
    </Paper>
  );
}
