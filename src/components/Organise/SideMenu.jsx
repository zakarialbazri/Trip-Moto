import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText } from '@mui/material';

const useStyles = makeStyles({
  root: {
    width: '200px',
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
    zIndex: 999,
    padding: '16px',
    borderRadius: '8px',
    margin: '20rem 0', // Added top and bottom margin to center vertically
    marginLeft: '16px', // Added left margin
  },
  menuItem: {
    marginBottom: '8px',
  },
  blackText: {
    color: 'black',
  },
});

const SideMenu = ({ isTripFormVisible, setIsTripFormVisible }) => {
  const classes = useStyles();

  const handleMenuClick = (formType) => {
    setIsTripFormVisible(formType === 'trip');
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem
          button
          className={classes.menuItem}
          selected={isTripFormVisible}
          onClick={() => handleMenuClick('trip')}
        >
          <ListItemText primary="Organize Trip" classes={{ primary: classes.blackText }} />
        </ListItem>
        <ListItem
          button
          className={classes.menuItem}
          selected={!isTripFormVisible}
          onClick={() => handleMenuClick('event')}
        >
          <ListItemText primary="Organize Event" classes={{ primary: classes.blackText }} />
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
