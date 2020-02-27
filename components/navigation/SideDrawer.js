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
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Route #1"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Route #2"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer