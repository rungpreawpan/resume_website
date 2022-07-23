import React from 'react';
import DrawerAppBar from '../../components/AppBar/AppBar';
import Footer from '../../components/Footer/Footer';
import { Box, Typography } from '@mui/material';

function Resume() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <DrawerAppBar />
      <Box sx={{ py: 10, px: { xs: 3, sm: 5, md: 10, xl: 20 } }}>
        <Typography>Resume</Typography>
      </Box>
      <Footer />
    </Box>
  );
}

export default Resume;
