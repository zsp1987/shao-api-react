import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export const Header = () => {
    const classes = useStyle();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6">Shao App</Typography>
            </Toolbar>
        </AppBar>
    );
};
