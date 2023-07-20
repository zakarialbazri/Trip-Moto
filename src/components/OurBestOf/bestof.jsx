import React from 'react';
import Grid from '@mui/material/Grid';
import style from'./bestof.css';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme= createTheme({
  typography:{
    htmlFontSize: 10,
  }
});

const bestof = (props) => {
  return (
    <div  className='bestof'>
      <h1 className='bestof__title'>Breathtaking Motorcycle Rides: Thousands Await</h1>
         <Grid   className='bestof__container' container spacing={3}>
            <Grid className='bestof__grid' item xs={3}>
            <Card  className='bestof__card'>
                <CardActionArea >
                <img
                    src={"https://media.moto-trip.com/upload/staticmap/59e86692f200883b2c2f9fe2.png"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" >
                             MON TERRAIN DE JEUX
                        </Typography>
                        <Typography variant="h5"  color="text.secondary" className='bestof__typography'>
                            <div className='bestof__parametres'><StarBorderIcon />0</div>
                            <div className='bestof__parametres'>   <AddRoadIcon/>332.18 km </div>
                            <div className='bestof__parametres'> <AccessTimeIcon/>05h30</div>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       
                    <Avatar  aria-label="recipe">
                          
                      </Avatar>

                    </CardActions>
              </Card>
            </Grid>


            
            <Grid className='bestof__grid' item xs={3}>
            <Card >
                <CardActionArea>
                <img
                    src={"https://media.moto-trip.com/upload/staticmap/5eeb77e94728520004818203.png"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            GUILLESTRE-LOMBARDE
                        </Typography>
                        <Typography variant="h5" color="text.secondary" className='bestof__typography'>

                            <div className='bestof__parametres'><StarBorderIcon />0</div>   <div className='bestof__parametres'><AddRoadIcon/>332.18 km</div>  <div className='bestof__parametres'><AccessTimeIcon/>05h30</div>
                        </Typography>
                       
                    </CardContent>
                    
                    </CardActionArea>
                    <CardActions className='bestof__profile'>
                    
                        <Avatar aria-label="recipe">
                          
                        </Avatar>
                          
        
       

                    </CardActions>
              </Card>
            </Grid>


           <Grid className='bestof__grid' item xs={3}>
            <Card >
                <CardActionArea>
                <img
                    src={"https://media.moto-trip.com/upload/staticmap/59e7b8263bfec53b04eaf701.png"}
                    alt=""
                    className='pictures' />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            VACANCES 2013 - 7° PARTIE
                        </Typography>
                        <Typography variant="h5" color="text.secondary" className='bestof__typography'>
                        <div className='bestof__parametres'><StarBorderIcon />0</div>
                            <div className='bestof__parametres'>   <AddRoadIcon/>332.18 km </div>
                            <div className='bestof__parametres'> <AccessTimeIcon/>05h30</div>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        

                    <Avatar  aria-label="recipe">
                          
                        </Avatar>
                    </CardActions>
              </Card>
            </Grid>
            
         </Grid>

         
    </div>
  )
}

export default bestof