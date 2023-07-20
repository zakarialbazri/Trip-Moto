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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--white)',
    padding: '16px', // Equivalent to theme.spacing(2)
  },
  container: {
    padding: '40px',
    
  },
  card: {
    marginBottom: '32px', // Equivalent to theme.spacing(4)
    width: '100%',
    height: '60%',
    padding: '20px',
    marginLeft: '20px',
    position: 'relative',
    
    
  },
  cardava: {
    marginBottom: '32px', // Equivalent to theme.spacing(4)
    width: '100%',
    height: '95%',
    
  },

  updateButton: {
    
  },
  

  
  avatar: {
    marginBottom: '16px', // Equivalent to theme.spacing(2)
    
  },

  infoAva: {
    display: 'flex',
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
    justifyContent: 'center',
    color: 'var(--black)',
    '& a': {
      color: 'var(--black)',
      textDecoration: 'none',
      marginLeft: '8px',
      fontFamily: 'Arial, sans-serif', // Replace with desired font family
      fontSize: '14px', // Replace with desired font size
    },
  },

  cardDone: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    height: '100%',
    marginLeft: '20px',
  },
  cardFuture: {
  
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    height: '100%',
    marginLeft: '20px',
    
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px', // Equivalent to theme.spacing(2)
  },
  

}));

function ProfilePage() {
  const classes = useStyles();
  const [fullName, setFullName] = useState('Johnatan Smith');
  const [email, setEmail] = useState('example@example.com');
  const [phone, setPhone] = useState('(097) 234-5678');
  const [motorcycle, setMotorcycle] = useState('XX-1234567');
  const [address, setAddress] = useState('Bay Area, San Francisco, CA');
  const [avatarImage, setAvatarImage] = useState('https://cdn-icons-png.flaticon.com/512/17/17004.png?w=740&t=st=1689280122~exp=1689280722~hmac=2e1efeaf54f332057eb906fd094394646b6498cb340c58e1887153f7e4ac0112');



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

  const handleUpdate = () => {
    // Perform any necessary actions, such as sending updated information to a server or saving in local storage
    console.log('Updated Information:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Motorcycle:', motorcycle);
    console.log('Address:', address);
  };

  


  return (
    <section className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.breadcrumb}>
            <Link color="inherit" href="#">
              Home
            </Link>
            <Link color="inherit" href="#">
              User
            </Link>
            <Typography color="textPrimary">User Profile</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className={classes.cardava} sx={{ backgroundColor: 'var(--gris2)', display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',}}>
            <CardContent>
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
              <div className={classes.infoAva}>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Occupation
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Bay Area, San Francisco, CA
              </Typography>
              </div>
              <Grid className={classes.social} container justifyContent={'space-between'}>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                  <InstagramIcon style={{ marginRight: '8px' }} />
                  <Link href="#">Instagram</Link>
                </Typography>

                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                  <FacebookIcon style={{ marginRight: '8px' }} />
                  <Link href="#">Facebook</Link>
                </Typography>

                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                  <TwitterIcon style={{ marginRight: '8px' }} />
                  <Link href="#">Twitter</Link>
                </Typography>
              </Grid>
                              
                <Button variant="contained" onClick={handleUpdate} sx={{ backgroundColor: 'var(--yellow)', color: 'var(--black)', marginBottom: '8px', width: '100%', display: 'flex', justifyContent: 'center', borderRadius: '10px' }} startIcon={<EditIcon />}>
                  UPDATE
                </Button>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
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
                    fullWidth
                    variant="standard" // Change variant as per your requirement
                    value={fullName}
                    onChange={handleFullNameChange}
                  />              
              </Grid>
            </Grid>
            <hr />
            <Grid container className={classes.infoContainer}>
              <Grid item xs={3}>
                <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon style={{ marginRight: '8px' }} /> Email
                </Typography>
              </Grid>
              <Grid item xs={9}>
              <TextField
                    fullWidth
                    variant="standard" // Change variant as per your requirement
                    value={email}
                    onChange={handleEmailChange}
                  />              
              </Grid>
            </Grid>
            <hr />
            <Grid container className={classes.infoContainer}>
              <Grid item xs={3}>
                <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon style={{ marginRight: '8px' }} /> Phone
                </Typography>
              </Grid>
              <Grid item xs={9}>
              <TextField
                    fullWidth
                    variant="standard"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
              </Grid>
            </Grid>
            <hr />
            <Grid container className={classes.infoContainer}>
              <Grid item xs={3}>
                <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                  <TwoWheelerIcon style={{ marginRight: '8px' }} /> Motorcycle
                </Typography>
              </Grid>
              <Grid item xs={9}>
              <TextField
                    fullWidth
                    variant="standard"
                    value={motorcycle}
                    onChange={handleMotorcycleChange}
                  />
              </Grid>
            </Grid>
            <hr />
            <Grid container className={classes.infoContainer}>
              <Grid item xs={3}>
                <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                  <HomeIcon style={{ marginRight: '8px' }} /> Address
                </Typography>
              </Grid>
              <Grid item xs={9}>
              <TextField
                    fullWidth
                    variant="standard"
                    value={address}
                    onChange={handleAddressChange}
                  />
              </Grid>
            </Grid>
          </CardContent>
        </Card>


        <Grid container>
            <Grid item xs={12} md={6}>
              <Card className={classes.cardDone}>
                <CardContent>
                  <Typography variant="body1" color="var(--black)" style={{ display: 'flex', alignItems: 'center' }}>
                      <PinDropIcon style={{ marginRight: '5px' }} /> Taken Rides{' '}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 1</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 2</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 3</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 4</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 5</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={classes.cardFuture}>
                <CardContent>
                <Typography variant="body1" color="var(--black)" style={{ display: 'flex', alignItems: 'center' }}>
                    <MapIcon style={{ marginRight: '5px' }} /> Viseted Spots
                </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 1</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 2</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 3</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 4</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{ marginRight: '5px' }} />
                    <span style={{ fontSize: '.77rem' }}>Location 5</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </section>
  );
}

export default ProfilePage;
