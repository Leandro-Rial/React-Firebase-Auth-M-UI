import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Add from '../components/Todo/Add';
import Home from '../components/Todo/Home';
import Navbar from '../components/Navbar/Navbar';
import {
    Hidden,
    makeStyles
} from '@material-ui/core';
import Cajon from '../components/Navbar/Cajon';

const stylesRoute = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

const DashboardRouter = () => {

    const classes = stylesRoute();

    const [open, setOpen] = useState(false);

    const actionOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <Navbar actionOpen={actionOpen} />
            <Hidden xsDown>
                <Cajon 
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            
            <Hidden smUp>
                <Cajon 
                    variant="temporary"
                    open={open}
                    onClose={actionOpen}
                />
            </Hidden>

            <div className={classes.content}>

                <div className={classes.toolbar}></div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/add" component={Add} />

                    <Redirect to="/home" />
                </Switch>
                
            </div>
        </div>
    )
}

export default DashboardRouter
