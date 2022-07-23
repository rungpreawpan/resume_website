import React from 'react';
import DrawerAppBar from '../../components/AppBar/AppBar';
import Footer from '../../components/Footer/Footer';
import HomeContent from './HomeContent';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box>
      <DrawerAppBar />
      <Box
        alignContent="center"
        height="100%"
        sx={{
          pt: 10,
          px: { xs: 3, sm: 5, md: 10, xl: 20 },
          backgroundColor: 'pink',
        }}
      >
        <HomeContent />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
