import { Box, Grid } from '@mui/material';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <Box>
      <Grid
        container
        xs={10}
        sm={10}
        md={12}
        lg={12}
        xl={12}
        style={{
          display: 'flex',
          justifyContent: 'column',
          gap: '40px',
          width: '100%',
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default Container;
