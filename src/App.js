import DrawerAppBar from './components/AppBar/AppBar';
import { Box, Divider, Typography, Grid } from '@mui/material';
import BottomBar from './components/BottomBar/BottomBar';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <DrawerAppBar />
      <Box sx={{ py: 10, px: { xs: 3, sm: 5, md: 10, xl: 20 } }}>
        <Typography>Home</Typography>
      </Box>
      <BottomBar />
    </Box>
  );
}

export default App;
