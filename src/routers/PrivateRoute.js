import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({ 
    isLog, 
    component: Component,
    ...rest
 }) => (

    <Route {...rest} component={(props) => (
        isLog ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />

);

const mapStateToProps = (state) => ({
    isLog: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
