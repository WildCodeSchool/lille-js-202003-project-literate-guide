import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import TuneIcon from '@material-ui/icons/Tune';
import NavBarStyles from './NavbarStyles';
import TabTagList from '../tabtaglist/TabTagList';
import '../../App.scss';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const classes = NavBarStyles();
  return (
    <div className="header">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static" className={classes.navBar}>
          <Toolbar className={classes.menuTool}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <div className={classes.logo}>
              <img src="/images/logo.png" alt="logo" className={classes.img} />
              <h3 className={classes.alpha}>Version Alpha</h3>
            </div>

            <IconButton onClick={openDrawer} color="inherit">
              <TuneIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div>
          <SwipeableDrawer anchor="right" open={open} onClose={closeDrawer}>
            <TabTagList />
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
