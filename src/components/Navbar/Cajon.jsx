import React from 'react';
import { makeStyles, Drawer, Divider } from '@material-ui/core';
import Lists from './Lists';

const cajonStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar
}))

const Cajon = (props) => {

    const classes = cajonStyles();

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <Lists onClose={props.onClose ? props.onClose : null} />
        </Drawer>
    )
}

export default Cajon
