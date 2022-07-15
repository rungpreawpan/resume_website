import React from 'react';
import DrawerAppBar from '../../components/AppBar/AppBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import { Box, Typography } from '@mui/material';

function Projects() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <DrawerAppBar />
      <Box sx={{ py: 10, px: { xs: 3, sm: 5, md: 10, xl: 20 } }}>
        <Typography>Projects</Typography>
      </Box>
      <BottomBar />
    </Box>
  );
}

export default Projects;
