import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import Backdrop from '@mui/material/Backdrop';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6];
const options = ['Any', 'less than 1 hour', 'Between 1 and 2 hours', 'Between 2 and 4 hours', 'More than 4 hours'];
const distances = ['Any', 'less than 100 Km', 'Between 100 and 200 km', 'Between 200 and 400 km', 'More than 400 Km'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url('bgimg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: black;
    color: white;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  &&:hover {
    background-color: blue;
  }
`;
const imageURL = "https://cdn.pixabay.com/photo/2023/05/20/20/39/european-roller-8007340__340.jpg";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  
  return ( 
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <AppBar position="relative" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <TravelExploreIcon sx={{ color: 'black', mr: 2 }} />
            <Typography variant="h6" color="black" noWrap>
              Stroll search
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        {/* Hero unit */}
        <Box className={classes.root}
          component="main"
          sx={{
            height: '75vh',
            backgroundColor: 'text.secondary',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <CssBaseline />
            <Item>
            <React.Fragment>
              <Backdrop
                open={true}
                sx={{
                  position: 'absolute',
                  width: '700px',
                  height: '540px',
                  top: '100px',
                  left: '30px',
                  right: '630px',
                  bottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, .5)',
                  backdropFilter: 'blur(20px)',
                  zIndex: 1,
                }}
              />
              <Box
                position="absolute"
                top={'150px'}
                left={'120px'}
                right={'650px'}
                sx={{
                  marginTop: '8',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 2, // Ensure the form is on top of the backdrop
                }}
              >

              <Typography variant="h3" gutterBottom>
                Find your next stroll
              </Typography>
              <Typography variant="h7" align="center"  paragraph>
                Discover what new in the world of stroll, find new places, events and compagnions throught your journey.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Enter you current localisation"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Where do you want to stroll today"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                  options={options}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="periode of time" variant="standard" />
                  )}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={distances}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField {...params} label="Distance" variant="standard" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker xs={{ width: '200'}} />
                  </LocalizationProvider>
                </Grid>
                <Grid button xs={12}>
                  <StyledButton variant="contained">
                    search
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
            </React.Fragment>
            </Item>
          </Box>
          <Box position="absolute" top={85}  right={30}      
            sx={{
              width: '570px',
              height: '570px',
              marginTop: '8',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: 'black',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
          <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100', display: 'flex', flexDirection: 'column' }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '60%',
                    }}
                    image="./public/road.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography>More information</Typography>
                      </CardContent>
                    </Collapse>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>

  );
}