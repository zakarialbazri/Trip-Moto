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

const EventForm = () => {
  const classes = useStyles();

  return (
    <div className='form-container'>
        <div className='form-fields'>
        <Stack spacing={2}>
      <TextField
        label="Event Location"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        variant="outlined"
        className={classes.input}
        type="datetime-local"
      />
      <TextField
        label="Event Description"
        variant="outlined"
        multiline
        rows={4}
        className={classes.input}
      />
      <input type="file" accept="image/*" />
      <Button variant="contained" sx={{ bgcolor: 'black'}} >
        Submit Event
      </Button>
      </Stack>
      </div>
    </div>
  );
};

export default EventForm;
