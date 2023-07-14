import * as React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactBingmaps } from 'react-bingmaps'; 
import Style from './rides.css';
import Navbar from '../Navbar/navbar'
import Map from './rides-map';



function FullWidthGrid() {

  const latitude = 51.5074; // Example latitude
  const longitude = -0.1278; // Example longitude

  
  return (
      <div className='rides'>
        <div style={{backgroundColor:'black'}}>
        <Navbar  /> 
        </div>
     
         <section style={Style}>
           <Grid className='rides__container' container spacing={3}>
              <Grid item xs={1} md={11}>
                      <div className='rides__map' >
                        <Map />
                      </div>
              </Grid> 
              </Grid>
         </section>
            
         
      
  
      </div>
  );
} 

export default FullWidthGrid;