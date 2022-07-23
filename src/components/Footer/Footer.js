import React from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

function Footer() {
  const followIcon = [
    {
      id: 0,
      icon: <LinkedIn />,
      link: 'https://github.com/rungpreawpan',
    },
    {
      id: 1,
      icon: <GitHub />,
      link: 'https://www.linkedin.com/in/preawpan-siriphalangkanont-3781791ba',
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
          <Typography sx={{ ...titleStyle }}>Phone</Typography>
          <Typography>(+66) 80-953-7819</Typography>
        </Box>
        <Box>
          <Typography sx={{ ...titleStyle }}>Email</Typography>
          <Typography>siri.preawpan@gmail.com</Typography>
        </Box>
        <Box>
          <Typography sx={{ ...titleStyle }}>Follow me</Typography>
          <Box>
            {followIcon.map((follow) => {
              return (
                <IconButton
                  key={follow.id}
                  sx={{ color: 'black' }}
                  href={follow.link}
                >
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

export default Footer;
