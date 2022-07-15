import React from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

function BottomBar() {
  const followIcon = [
    {
      id: 0,
      icon: <LinkedIn />,
      link: '1',
    },
    {
      id: 1,
      icon: <GitHub />,
      link: '2',
    },
  ];

  const titleStyle = {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Divider sx={{ m: 2, backgroundColor: 'black' }} />
      <Box
        sx={{
          height: '80px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ ...titleStyle }}>Call</Typography>
          <Typography>(+66) 80-953-7819</Typography>
        </Box>
        <Box>
          <Typography sx={{ ...titleStyle }}>Write</Typography>
          <Typography>siri.preawpan@gmail.com</Typography>
        </Box>
        <Box>
          <Typography sx={{ ...titleStyle }}>Follow</Typography>
          <Box>
            {followIcon.map((follow) => {
              return (
                <IconButton key={follow.id} sx={{ color: 'black' }}>
                  {follow.icon}
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomBar;
