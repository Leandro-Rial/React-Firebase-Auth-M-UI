import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default DashboardRouter
