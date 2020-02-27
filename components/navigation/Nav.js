import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose= () => {
    setOpen(false);
  }
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleOpen} color="secondary">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SideDrawer open={open} handleClose={handleClose}/>
    </AppBar>
  )
}

export default Nav;