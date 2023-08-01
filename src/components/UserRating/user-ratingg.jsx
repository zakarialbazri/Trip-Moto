import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stars from './rating-stars';
import Grid from '@mui/material/Grid';
import './user-rating.css';
import { createTheme } from '@mui/material/styles';




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

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={6} className='rating__grid'>
    <Card>
    <CardHeader
       avatar={
         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           R
         </Avatar>
       }
       action={
         <IconButton aria-label="settings">
           <MoreVertIcon />
         </IconButton>
       }
       
       title={props.name}
       subheader="September 14, 2016"
       />
       

        <CardContent>
            <Typography variant="h4" color="text.secondary">
            {/* This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like. */}
            {props.text}
            </Typography>
        </CardContent>
      
      

<CardActions disableSpacing className='like__container'>
          <div>
              <Stars />
          </div>
        </CardActions>
    </Card>
    </Grid>
  );
}
