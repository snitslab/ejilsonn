import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const blinkBackground = keyframes`
  0% { background-color: #ff6666; }
  25% { background-color: #66ff66; }
  50% { background-color: #6666ff; }
  75% { background-color: #ffff66; }
  100% { background-color: #ff6666; }
`;

const scrollText = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        animation: `${blinkBackground} 2s infinite`,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
          color: 'white',
          animation: `${scrollText} 5s linear infinite`,
        }}
      >
        This Home page is under construction
      </Typography>
    </Box>
  );
}
