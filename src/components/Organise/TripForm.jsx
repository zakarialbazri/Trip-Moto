import React from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import './form.css';


const useStyles = makeStyles({
  input: {
    marginBottom: '16px',
  },
});

const TripForm = () => {
  const classes = useStyles();

  return (
    <div className='form-container'>
        <div className='form-fields'>
        <Stack spacing={2}>
      <TextField
        label="Start Location"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        label="Trip Destination"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        variant="outlined"
        className={classes.input}
        type="date"
      />
      <TextField
        label="Trip Duration"
        variant="outlined"
        className={classes.input}
      />
      <input type="file" accept="image/*" />
      <Button variant="contained" sx={{ bgcolor: 'black'}}>
        Submit Trip
      </Button>
      </Stack>
      </div>
    </div>
  );
};

export default TripForm;
