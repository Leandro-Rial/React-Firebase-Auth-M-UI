import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import NotFound from '../utils/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <PrivateRouter exact path="/" component={DashboardRouter} />

                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
