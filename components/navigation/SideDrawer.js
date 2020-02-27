import React from 'react';
import { 
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const SideDrawer = ({ open, handleClose }) => {
  return (
    <Drawer open={open} onClose={handleClose}>
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer