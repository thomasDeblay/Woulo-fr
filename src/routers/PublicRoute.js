import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';



export const PublicRoute = ({ 
    isLog, 
    component: Component,
    ...rest
 }) => (

    <Route {...rest} component={(props) => (
        isLog ? (
            <Redirect to="/home" />
        ) : (
            <Component {...props} />
        )
    )} />

);

const mapStateToProps = (state) => ({
    isLog: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);


