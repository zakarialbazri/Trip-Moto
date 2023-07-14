import * as React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactBingmaps } from 'react-bingmaps'; 
import Style from './spots.css';
import Navbar from '../Navbar/navbar'
import Map from './spots-map';



function FullWidthGrid() {

  return (
      <div className='spots'>
        <div style={{backgroundColor:'black'}}>
            <Navbar  /> 
        </div>
     
         <section style={Style}>
           <Grid className='spots__container' container spacing={3}>
              <Grid className='spots__grid' item xs={1} md={11}>
                      <div className='spots__map' >
                        <Map  />
                      </div>
              </Grid> 
              </Grid>
         </section>
            
         
      
  
      </div>
  );
} 

export default FullWidthGrid;