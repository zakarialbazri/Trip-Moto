import React from 'react';
import Grid from '@mui/material/Grid';
import style from'./bestof.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme= createTheme({
  typography:{
    htmlFontSize: 10,
  }
});

const bestof = () => {
  return (
    <div  className='bestof'>
         <Grid   className='bestof__container' container spacing={0}>
            <Grid className='bestof__grid' item xs={3}>
            <Card >
                <CardActionArea >
                <img
                    src={"https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="h6"  color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary">
                          Share
                        </Button>
                    </CardActions>
              </Card>
            </Grid>


            
            <Grid className='bestof__grid' item xs={3}>
            <Card >
                <CardActionArea>
                <img
                    src={"https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary">
                          Share
                        </Button>
                    </CardActions>
              </Card>
            </Grid>


           <Grid className='bestof__grid' item xs={3}>
            <Card >
                <CardActionArea>
                <img
                    src={"https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large"  color="primary">
                          Share
                        </Button>
                    </CardActions>
              </Card>
            </Grid>
            
         </Grid>

         
    </div>
  )
}

export default bestof