import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SideMenu from './SideMenu';
import TripForm from './TripForm';
import EventForm from './EventForm';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '3rem',
    backgroundImage: 'url("https://images.pexels.com/photos/980382/pexels-photo-980382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backdropFilter: 'blur(10px)',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '1rem',
    borderRadius: '8px',
  },
  title: {
    '& h1': {
      fontSize: '36px', // Adjust the font size to make it bigger
      fontWeight: 'bold',
      fontFamily: 'New York, sans-serif', // Use the New York font
       // Set the text color to white
      textAlign: 'center', // Center align the text
      marginBottom: '1rem', // Add some space below the title
    },
  },
  divider: {
    width: '90%', // Adjust the width of the divider
    height: '3px', // Adjust the height of the divider
    backgroundColor: 'black', // Set the color of the divider
    margin: '0 auto', // Center the divider horizontally
    marginTop: '10px', // Add some space between the title and the divider
    marginBottom: '20px', // Add some space below the divider
  },
});

const OrganizePage = () => {
  const classes = useStyles();
  const [isTripFormVisible, setIsTripFormVisible] = useState(true);

  return (

    
    <div className={classes.container}>
    <div className={classes.title}> 
       <h1>
          Organize a Trip/Event and gather people with the same passion
        </h1>
        </div>
        <div className={classes.divider} />
      <div className={classes.content}>
        
        <SideMenu
          isTripFormVisible={isTripFormVisible}
          setIsTripFormVisible={setIsTripFormVisible}
        />

        {isTripFormVisible ? <TripForm /> : <EventForm />}
      </div>
    </div>
  );
};

export default OrganizePage;
