import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactBingmaps } from 'react-bingmaps'; 
import Style from './style.css';
import TextField from '@mui/material/TextField';
import NAVBAR1 from './navbar';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const latitude = 51.5074; // Example latitude
  const longitude = -0.1278; // Example longitude

  const matches = useMediaQuery('(min-width:900px)');
  return (
      <div>
        <div style={{backgroundColor:'black'}}>
        <NAVBAR1  /> 
        </div>
      {(matches)? (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
            
                  <Grid item xs={1} md={12}>
                        
                          <div className='TextField-Map'>
                          <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                size='sm'
                                autoComplete="city"
                                
                              />  
                          <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                size='sm'
                                autoComplete="city"
                               
                              />  
                          <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                size='sm'
                                autoComplete="city"
                               
                              />  
                          <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                size='sm'
                                autoComplete="city"
                               
                              />  
                          <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                size='sm'
                                autoComplete="city"
                                
                              />  
                          </div>
                        
                  </Grid>
                  <Grid item xs={15} md={6}>
                        <div className='Map' ></div>
                  </Grid>
                  <Grid item xs={1} md={6}>
                          <div className='Map' >
                            <ReactBingmaps
                                bingmapKey="Av6fxZ-p_2NlKveJgeJlzlfhITkqZq7nm72MhXdbQR6ThydQil2hzPkATctmB_6A"
                                center={[latitude, longitude]}
                                zoom={10}
                              />
                          </div>
                  </Grid> 
            </Grid>
          </Box>
      ):
      (<h1>hello</h1>)}
      </div>
  );
}