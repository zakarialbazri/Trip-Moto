import React from 'react';
import { Card, CardHeader, CardContent, Typography, CardActions, Button } from '@mui/material';

const TripCard = ({ destination, period, image }) => {
  return (
    <Card>
      <CardHeader title={destination} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {period}
        </Typography>
        {/* Render the image here */}
        {image && <img src={URL.createObjectURL(image)} alt="Trip" style={{ width: '100%', marginTop: '10px' }} />}
      </CardContent>
      <CardActions>
        {/* Add any actions you want for the card */}
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="secondary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default TripCard;
