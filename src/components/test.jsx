import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactBingmaps } from 'react-bingmaps';

export default function SimpleContainer() {
    const latitude = 51.5074; // Example latitude
    const longitude = -0.1278; // Example longitude
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{maxHeight:'20px'}}>
      <ReactBingmaps
              bingmapKey="Av6fxZ-p_2NlKveJgeJlzlfhITkqZq7nm72MhXdbQR6ThydQil2hzPkATctmB_6A"
              center={[latitude, longitude]}
              zoom={10}
            />
      </Container>
    </React.Fragment>
  );
}
