import {
    Container,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    makeStyles,
} from '@material-ui/core';
import { Email, SportsBasketball } from '@material-ui/icons';
import React from 'react';
import NBA from './nba/nba';
import { Header } from './Header';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: '300px',
    },
    mainContent: {
        position: 'fixed',
        top: 64,
        left: 300,
        right: 0,
        bottom: 0,
        display: 'flex',
    },
}));

const App: React.FC = () => {
    const classes = useStyle();
    <CssBaseline />;
    return (
        <div className={classes.root}>
            <Header></Header>
            <Drawer variant="permanent" className={classes.drawer}>
                <Toolbar />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <Email />
                                    ) : (
                                        <SportsBasketball />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
            </Drawer>
            <div className={classes.mainContent}>
                <NBA></NBA>
            </div>
        </div>
    );
};

export default App;
