import React from 'react';
import { Box, Divider, Grid, Typography, Button } from '@mui/material';
import ProfilePic from '../../assets/resumepic.png';

function HomeContent() {
  const buttonItems = [
    {
      id: 0,
      title: 'RESUME',
      link: ``,
    },
    {
      id: 1,
      title: 'PROJECTS',
      link: ``,
    },
    {
      id: 2,
      title: 'CONTACT',
      link: ``,
    },
  ];

  const nameStyle = {
    color: 'black',
    fontSize: 35,
    fontWeight: 1000,
    fontFamily: 'montserrat',
  };

  const positionStyle = {
    color: 'black',
    fontSize: 20,
    fontFamily: 'montserrat',
    pt: 2,
  };

  const buttonStyle = {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'montserrat',
  };

  return (
    <Box width="100%" height="100%">
      <Grid container spacing={1}>
        <Grid width="40%" align="center">
          <Box
            component="img"
            sx={{ height: 400, width: 400 }}
            alt="profile pic"
            src={ProfilePic}
          />
        </Grid>
        <Grid
          width="60%"
          alignItems="center"
          justifyContent="center"
          direction="column"
          display="flex"
        >
          <Typography sx={{ ...nameStyle }}>PREAWPAN</Typography>
          <Typography sx={{ ...nameStyle }}>SIRIPHALANGKANONT</Typography>
          <Typography sx={{ ...positionStyle }}>SOFTWARE ENGINEER</Typography>
          <Divider sx={{ backgroundColor: 'black', width: '70%', my: 5 }} />
          <Box>
            {buttonItems.map((item) => {
              return (
                <Button
                  key={item.id}
                  sx={{ backgroundColor: '#d0d0d0', px: 2, mx: 1 }}
                >
                  <Typography sx={{ ...buttonStyle }}>{item.title}</Typography>
                </Button>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeContent;
