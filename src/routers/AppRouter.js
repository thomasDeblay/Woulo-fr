import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Add from '../components/Add';
import EditExpense from '../components/EditExpense';
import ExpenseDashbord from '../components/ExpenseDashbord';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true}  />
                <PrivateRoute path="/home" component={ExpenseDashbord} />
                <PrivateRoute path="/create" component={Add} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFound} />
                
            </Switch>
        </div>
    </Router>
);

export default AppRouter;