import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import { Email, SportsBasketball } from '@material-ui/icons';
import React from 'react';
import { Header } from './Header';
import NBA from './nba/nba';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: '300px',
  },
}));

const App: React.FC = () => {
  const classes = useStyle();
  <CssBaseline />;
  return (
    <Box flex>
      <Header></Header>
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Email /> : <SportsBasketball />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box>
        <NBA></NBA>
      </Box>
    </Box>
  );
};

export default App;
