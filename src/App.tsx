import React from 'react';
import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";

import {Email, SportsBasketball} from '@material-ui/icons';
import NBA from "./nba/nba";

const drawerWidth = 300;

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContent: {
        display: 'flex',
        flexFlow: 'column nowrap',
        flexGrow: 'inherit'
    },
    drawerTitle: {
        flexBasis: 64,
        flexShrink: 0
    },
    drawerList: {
        flexGrow: 1,
        backgroundColor: 'tomato'
    },
    content: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingTop: 64,
    },
    mainContent: {
        height: "100%",
        width: "100%"
    }
});

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    anchor="left"
                    open={true}>
                <div className={classes.drawerContent}>
                    <div className={classes.drawerTitle}></div>
                    <div className={classes.drawerList}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <Email/> : <SportsBasketball/>}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.mainContent}>
                    <NBA></NBA>
                </div>
            </main>
        </div>
    );
};

export default App;
