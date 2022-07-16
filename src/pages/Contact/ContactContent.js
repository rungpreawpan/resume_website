import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

function ContactContent() {
  return (
    <Box>
      <Box>
        <Typography>First Name</Typography>
        <TextField hiddenLabel size="small" />
      </Box>
      <Box>
        <Typography>Last Name</Typography>
        <TextField hiddenLabel size="small" />
      </Box>
      <Box>
        <Typography>Email *</Typography>
        <TextField hiddenLabel size="small" />
      </Box>
      <Box>
        <Typography>Subject</Typography>
        <TextField hiddenLabel size="small" />
      </Box>
      <Box>
        <Typography>Message</Typography>
        <TextField hiddenLabel multiline rows={4} />
      </Box>
      <Button
        disableElevation
        disableRipple
        disableFocusRipple
        color="inherit"
        variant="contained"
        sx={{ backgroundColor: '#d0d0d0' }}
      >
        <Typography sx={{ color: 'black' }}>Submit</Typography>
      </Button>
    </Box>
  );
}

export default ContactContent;
