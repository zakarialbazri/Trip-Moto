import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TextField } from '@mui/material';
import './userProfile.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileStepper from '@mui/material/MobileStepper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@mui/material/Paper';
import {CardActionArea, CardActions} from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'favorite spots',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'favorite spots',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'favorite spots',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'favorite spots',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    padding: '16px', // Equivalent to theme.spacing(2)
    position: 'relative',
    
  },

  container: {
    padding: '20px',
    
  },

  card: {
    marginBottom: '32px',
    marginTop: '30px',
    width: '90%',
    height: '85%',
    
    margin: '10px',
    position: 'relative',

  },

  cardava: {
    marginBottom: '32px',
    marginTop:'20px',
    width: '80%',
    height: '83%',
    display: 'content',
      },
  
  avatar: {
    marginBottom: '16px', 
    width:'60%',
    height: '60%',
    
  },

  infoAva: {
    justifyContent: 'space-between',
    alignItems: 'center',
    
    
  },

  social: {
    backgroundColor: 'var(--yellow)',
    display: 'flex',
    padding: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    justifyContent: 'center', // Centers the links horizontally
    color: 'var(--black)',

    // Adding margin and flex property to equally space the links
    '& a': {
      color: 'var(--black)',
      textDecoration: 'none',
      marginLeft: '10px', // Adjust the margin as needed
      marginRight: '10px', // Adjust the margin as needed
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
    },
  },

  cardDone: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    height: '100%',
    marginLeft: '20px',
      },

  cardFuture: {
  
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    height: '100%',
    marginLeft: '20px',
       },

  infoContainer: {
    display: 'content',
    
    alignItems: 'center',
    margin: '20px',
    padding: '6px', // Equivalent to theme.spacing(2)
  },
  

}));

function ProfilePage() {


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  const classes = useStyles();
  const [fullName, setFullName] = useState('Johnatan Smith');
  const [email, setEmail] = useState('example@example.com');
  const [phone, setPhone] = useState('(097) 234-5678');
  const [motorcycle, setMotorcycle] = useState('XX-1234567');
  const [address, setAddress] = useState('Bay Area, San Francisco, CA');
  const [avatarImage, setAvatarImage] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEUAhon/s4EdJzP////+qG3y8vL/lHIAh4r/sn//tYIAhIn+u4///Pr/t4MAg4r/sHsSIjH/pnvur4HUqYIAHC9gTUgAHi8eHy0AgITTonMAFy0YJTL/rXWtmXodIzDMz9YAFS0bLDgTUloWRk/vqXscKjWEZVSXcVvVmXLNqYIMbnIeHSwIen4MZ24TU1ssMDhxWU3YmnI5NztKQT+Om4W8pYM2jIfkonZik4b/1rwjkZT+pWWx1dfj5OfX2d4ZQEkaND0QXmW8iWigdl5XR0PDjWp1W05CPT+vf2Scc1x6i3p+mIZlUUmcnoTQqoLirYNGj4YAByr+nXW+pYT/59n/8Of/zaz+xJ1xloVZkYf/0LX/6tyAt7hcqKrh8PCizc5HnqGOv79Ed+xNAAAMCElEQVR4nO2da1vayhqGCZUOEw2waIRsUiloBFQsKgqeWhCl0q0u3K32qNT+/z+xZxKEJCaZQcgk8cqzPrRdJjo373EOiZFIqFChQoUKFSpUqFChQoUKxVhgKK/H4YI0MF4ain9ZpJikur75fqXVbheLq8Visd1qrSyfrFell4CJCKqby+3VbDafz0fzUVXoL0jZfLG9crIuBRoSAGmzFc2O0ExC/x9htk7WIwGFROZbRtayhDOA5osrm0GEBNJylow3hMxmW0GDBGCTmm8ImV+uBigmgbSyMQmfBrnRDowhQbWdnRhQZSyeVIPACKrFiTzUABlFzuo1AElAaj8bUGOUfM4IWtMAImWjJxE/M4KTZ8WgkbG47uNwlKYHRNpo+SocgV7LU/roUPm8f1wVzYuqm++XV5DQlEGaCR9W1idmxO1nO69OHrA2ZmNBVfnopvfRCMB6i6K7fq6yy157KqiuuMiHlG95WxvBps3Ub4aIRe+CkUdpc/L2enLE/DqI8N4ggmfMH56jjU2PrAhWZlLa/YsI3rMCRCl1E7D3UzSHZwaIgpG9FUGVIR9GXGeNOPUMaVIVGddFtj6KlW8x7W5A5PnLFM9Vdpkp4QwmuRNrg2Uo8qvsAVEosgNkH4WqGPopmGotbQpEVn4Kqmz60adi5aezWomZXNkTNkYEHvHhySKTogiqnuQZVWwiEZx45aTIiCtMCFm3pHrCNgPASMSTcv+IyGDVBlS9MyGbQATr3iUaZEMG9cLLRIMI3zMgXPGUkEEyBa0JBiQHknCCtru2kwogYaRIPRyxrNQzgSMEEjWhXFMEZSs3W0L354hAoi74YkfgOHhamGUwsiCs0hKKJQTIcUIlKs6Q0P16SE0oLqqAyIrKZW5mZsy6v/hN66XimQC5oYROdFYJh0HXRplpclsjPoyobIkzqhvud95UhKlMGeoJEWP3fCau2maxB0UmFHe6AmeSwJ2uZqZmZFLwiT1NJlNWngCihCMo5dS04chkKcq5L5XFXMmKbxiOJXG6ysFiAmyaW8i5sevJKbGwc6oI0AZQs6MoTuGrbff58O62jjC33SzXU5mMiP5L1S57TcHOfiM7wt6OmHomJIOOJmLatJCbUBBgs9LtVrYVQXAwn45RqGxFn1c8GC0mro9tKO8o2Pc0UcCNnbV3Jk9uyXyRyZK3vqmR6/RYRkYoNHuXqyJF/dB9DswW9cflInVGCjsnQ0KlW6rnchl7W6LclbncGX05z2gvX5dqUovPJ9QsySmd8uJqISeaOGU5lRELtU89Rbh8DFk2eSZiWE6ckhBDYltySve0tLiTKhQKOSz0p3z+6XOnib7ICYuPhBvMjmOM956mJ3wERSkZZWKluV2pVLabivZPDmevESEzE+rddGaEOlRzVh7bkN2JmvEesBUhHiEepqAJQvsiCfHdjxepYBY155GQ6fG9UeNmJoS4pVGUZrO53e30Tsul0qfLxc+2gNzp2dnlVqlU7vW6282moigqsKUN8ys8s8N7fKLx36w1Ye9ysX6+U5MzYi4niplMJoWUW7QhFEo5/HXU9GVEEWXTaG2njoh7VjZMnfe/XoAEI8SrtFASLQiFUgGNV5bN5S33dLaomrBprvfoVvyJXD4llOVt5MbpKxZm5Bt9nOO0xWwjYbNgXbczZWvCbZvrCx3DCggilMWK+i1gv+E6Iw/SagrfVj9/AyHs2Cz+5jrWuaZp08wYPxFEmBoCop+Rdv8o7b/aaIUOnuYZCS1sgvxOFus2yVQoF7BPP8HM9YyEhR1l9B3gv24DXjz+cKGHrGiKw61cSh6lDrUPq9V2zkucXbkQOmcoL9Wisnq5mpYQcKamGL20rM+uwoXLhP3xImgXDciUS8v1+tni5adS+bSDZowVVAC0AmInOGpkuh1UW7Yuz1Aq3moaPxHjogHsu8rHX+uGKzTPcyZCQVfo1eaEYtKoNQjC8EaIv4npAtM/r10l3DV8nLA8867NqqsxXbDrZq7hvxp+PoTKrAHJgnuuEu45e1DwCRNLHiCZCZfc7N0SF5SEkG7ZTXc99UoWvHC1O23QjQNulz5ZN6PWEproekpG2HATcNTSEAZcQeW70KNGhNspNBuhu971pmafpsJx53g6kKFNtJCr4+tTTZpPD+67TPgkm1oNQmvBbaYUTyV01blYpkRxvbuZVNMaMV6Ekjq1ks9pCUsZ7Xpi8YFwzXU+pD1imqyr0wXZ2EE7EJ5pKzFEt4bCHgvASGK/72hGyNW0CZFMFVjoBu0TiRaajt8Vwv5PRssYPH+9u5R2gdDBhsLa3u41y+dI+cQbh31QF7w0HUkwfk7WiXCYOVJ1yr6GJtOkmT8l62jDrrqcIX6mzKWQolr4jHDCio/cmljx/UWIujZRzPyvQ9+1NUVSl+czQrWTrkzQeUOltOV8vd8I8fbDZDNJ0vX+I5y1QkJ2hMPNwwnPn0C9/E0IuX/0omWM62+KW93lG8L4a4O+GC9KvtWUNN31j/EuK0S/EELTWF/H9XxzY8UNt5lu+uJjG8IvpsHq/DQ+N2eDaDL869c+JjT7m97h3hoI3wbUhhxnNKI+DueMcvhc/ByHHIzb5lIHwiDlUuNOhuESJ0Ly/oePCG3lEIcUCgJh3MGEL4PQoR76k3DtGZ23XU/jT8KvTOcWMM38jXT8FVvCPnvCXbaEa+zfKviDLeEVq2OJY/1kS+jqERNrNew3Ltwg/OHBO1r7DI0I3d68txLbcsG+WNAl0ziliN8I7rFPNJHINfmTn6cUmdDtI5eWSqRJRkzeLFDplugN0JP3CCeuSN6VvHlFpVtSn+pBR6OKWBHj3+gIb4iEHlRDLKKbxufpCL+RCAWP3udNkU1vqQjnCe4O11jv4T8SAnKqoQEkhqHw0xO+CMVp0/h3GsIDAqFXeQaLeBYzTuOmRCf94UW5H4p0jC/5iwxIyqSw79VvRsAiH6hdmN6E+x4C8okrwnEEshGJJvRgdm8QaQ6VJETiAqkx8mLepBdPamxIVZ9U7SGTRw4dEUlrbknH1o1YKd54DYhEWvx2CkViEKY99lFVDVJ7am9FkgW9zaMjEUORS363rhm/koQ0I3g0pzCL/CBNnDuw8NB5ogUZnMunE79LOqQXT8IDQ9lYIPNx8Cu7J/BJSpA3MeLJt/O/bn7fLizc/r45mE+SHBSXeq+xdOITNLsY8XhS3V5LUuBxEH71msoo/mKStyhRCC75xkOH4veJS2+T8Hm1MuOkRGN25zFhmtWjI5MJNXCzYYRrnv/iShslrmfhqVBw9yHR6cTvTmtGCPc8+CVyEygByE+2OfKtXfvYgJoSjSX6p5af8Pkzw5iVaOz2J3rJoEYH01f+t9+jEvzPqz79UXb8Woz+3j6zdyTNRnykcbHXV1/h5ciJv95f270G/umy6YXH3Pixu9RP2it99QPDBZBuJJ5PLM3Z6z/B8kxr8Y6EXo9uFgoJg6+XSsg/AGn4NwpCSRpdHhDxh4NY7E4bMwVh9X7w6tV9oBCl4xjS4AEPmkgoHR7j5beYXyeFVpLuY6oWjg8lAiEvgT/DFcY/QTLiIPaoP0ByJJTuYqNF1EOvh00t6W5hRBgb3C8d2QIevRnolomPA2NEMDYh1od5G8QjznQaJSjJRvoTM+kmbsF4NHdg3rAZeD10Sh2aAZEO5syMR98sNqTuAmHE6rEFYSz23YB4JFjv73s9eCrdL1gSxn7Do7GD2h0HC0LF4AfWgNhVk0can8O+dwAqxr0tINKvuaOjo+9OB1D8XzFQBXfS7Xf424EvCIQRcGwTh5oc8ZAevB4/WXzEyYoEPtzHBkDS4ZOSPxThGJ82FwmEpIeBpatijA/v3n2w5IsFpWfThOa01oQI0BrxrxQoQGTGyF9LRAz47qNlAAZuWRhN3S0IP1oRDu6lwOGpkh4+PkGMYUJjSh3cBc1Bx5Iid6aUgxLKhw9GwD8BW2UzSQKmcLQKwIALhaPejMaSOAhWhbAWj6ujjREDHIAm6drx47uxg/IvhS+Cw/GxkTuUhqtruEULZomwkfSAq+MC6lzuA10BnSTdDwbHAP35dzD4G+wKYSMUddoShQReJF+oUKFChQoVKlSoUKFChQrlrf4PTGij75UayGUAAAAASUVORK5CYII=');



  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMotorcycleChange = (event) => {
    setMotorcycle(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    // Check if the file is selected
    if (file) {
      // Create a FileReader to read the image file
      const reader = new FileReader();

      // Set up the FileReader callback function
      reader.onloadend = () => {
        // Update the state with the image data
        setAvatarImage(reader.result);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const handleChipClick = (chipLabel) => {
    // Add your logic here to handle the click event for each chip.
    console.log(`Clicked on ${chipLabel} chip.`);
  };

  const handleUpdate = () => {
    // Perform any necessary actions, such as sending updated information to a server or saving in local storage
    console.log('Updated Information:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Motorcycle:', motorcycle);
    console.log('Address:', address);
  };

  const [value, setValue] = React.useState(0);


  return (
    <section className={classes.root}>
      <div class="custom-shape-divider-bottom-1689901353">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
      </div>
      <Grid container className={classes.container}>
        
        <Grid item xs={12}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.breadcrumb}>
            <Link color="inherit" href="#">
              Home
            </Link>
            <Link color="inherit" href="#">
              Profile
            </Link>
          </Breadcrumbs>
        </Grid>
        
        <Grid item xs={12} lg={4} sx={{height: '90%'}}>
        <Card sx={{ maxWidth: 345, height: '100%' }}>
          <CardActionArea>
          <input
                type="file"
                accept="image/*"
                id="avatar"
                style={{ display: 'none' }}
                onChange={handleAvatarChange}
              />
              <label htmlFor="avatar">
                <CardMedia
                  component="img"
                  alt="avatar"
                  src={avatarImage}
                  className={classes.avatar}
                />
              </label>
            <CardContent>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Occupation
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Stack  spacing={2} direction="row" sx={{width:'100%'}}>
              
              <Chip icon={<InstagramIcon />} label="Instagram" component="a" href="#basic-chip" clickable/> 
              <Chip icon={<FacebookIcon />} label="Facebook" component="a" href="#basic-chip" clickable/> 
              <Chip icon={<TwitterIcon />} label="Twitter"  component="a" href="#basic-chip" clickable /> 
            </Stack>
          </CardActions>
        </Card>
        </Grid>

        <Grid item xs={12} lg={8}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8} >
          <Card className={classes.card}>
                  <CardContent>
                    <Grid container className={classes.infoContainer}>
                      <Grid item xs={3}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                          <PersonIcon style={{ marginRight: '8px' }} /> Full Name
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                      <TextField
                            
                            variant="standard" // Change variant as per your requirement
                            value={fullName}
                            onChange={handleFullNameChange}
                          />              
                      </Grid>
                    </Grid>
                    <Grid container className={classes.infoContainer}>
                      <Grid item xs={3}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                          <EmailIcon style={{ marginRight: '8px' }} /> Email
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                      <TextField
                            
                            variant="standard" // Change variant as per your requirement
                            value={email}
                            onChange={handleEmailChange}
                          />              
                      </Grid>
                    </Grid>
                    <Grid container className={classes.infoContainer}>
                      <Grid item xs={3}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                          <PhoneIcon style={{ marginRight: '8px' }} /> Phone
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                      <TextField
                            
                            variant="standard"
                            value={phone}
                            onChange={handlePhoneChange}
                          />
                      </Grid>
                    </Grid>
                    <Grid container className={classes.infoContainer}>
                      <Grid item xs={3}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                          <TwoWheelerIcon style={{ marginRight: '8px' }} /> Motorcycle
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                      <TextField
                            
                            variant="standard"
                            value={motorcycle}
                            onChange={handleMotorcycleChange}
                          />
                      </Grid>
                    </Grid>
                    <Grid container className={classes.infoContainer}>
                      <Grid item xs={3}>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                          <HomeIcon style={{ marginRight: '8px' }} /> Address
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                      <TextField
                            
                            variant="standard"
                            value={address}
                            onChange={handleAddressChange}
                          />
                      </Grid>
                      
                    </Grid>
                    <Grid sx={{ alignContent: 'center' }}>
                        <Button variant="contained"  onClick={handleUpdate} sx={{ backgroundColor: 'primary', color: 'var(--black)', marginBottom: '8px', marginTop: '30px', width: '100%', display: 'content', justifyContent: 'center', borderRadius: '30px' }} startIcon={<EditIcon style={{ color: 'black' }} />}>
                            UPDATE
                        </Button>
                      </Grid>


                  </CardContent>
                </Card>
          </Grid>
          <Grid xs={8}>
          <Stack spacing={2}>
          <Box sx={{ maxWidth: 400, flexGrow: 1, height: '100%' }}>
                  <Paper
                    square
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      pl: 2,
                      bgcolor: 'background.default',
                    }}
                  >
                    <Typography>{images[activeStep].label}</Typography>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Box
                            component="img"
                            sx={{
                              height: 255,
                              display: 'block',
                              maxWidth: 400,
                              overflow: 'hidden',
                              width: '100%',
                            }}
                            src={step.imgPath}
                            alt={step.label}
                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </Box>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ borderRadius:'20px', width:'100%'}}
              >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
            </Stack>    
          </Grid>
        </Grid>
        </Grid>       
                

        
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
            <Card className={classes.cardDone}>
                <CardContent>
                  <Typography
                    variant="h5"
                    color="var(--black)"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}
                  >
                    <PinDropIcon style={{ marginRight: '5px' }} />
                    Taken Rides
                  </Typography>
                  <Stack  spacing={1}>
                    <Chip icon={<LocationOnIcon />} label="location "  clickable/> 
                    <Chip icon={<LocationOnIcon />} label="location"  clickable/> 
                    <Chip icon={<LocationOnIcon />} label="location"  clickable /> 
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8} >
            <Card className={classes.cardFuture}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="var(--black)"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}
                >
                  <MapIcon style={{ marginRight: '5px' }} />
                  Visited Spots
                </Typography>
                <Stack  spacing={1}>
                  <Chip icon={<LocationOnIcon />} label="location "  clickable/> 
                  <Chip icon={<LocationOnIcon />} label="location"  clickable/> 
                  <Chip icon={<LocationOnIcon />} label="location"  clickable /> 
                </Stack>
              </CardContent>
            </Card>
            </Grid>

          </Grid>
        </Grid>
     
    </section>
  );
}

export default ProfilePage;