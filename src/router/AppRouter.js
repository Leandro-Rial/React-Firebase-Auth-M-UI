import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import NotFound from '../utils/NotFound';
import PublicRouter from './PublicRouter';

const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <PublicRouter exact path="/signin" component={SignIn} />
                <PublicRouter exact path="/signup" component={SignUp} />

                <PrivateRouter path="/" component={DashboardRouter} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
